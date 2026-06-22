"use server";

import { createClient } from "@supabase/supabase-js";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Cliente de Supabase del lado del servidor. Usa el ANON KEY (no el
 * service role) a propósito: la seguridad la da la política RLS de
 * "insert" de la tabla `leads` (ver supabase/schema.sql), no el
 * secreto de esta key.
 */
function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot anti-spam: campo invisible para humanos. Si viene
  // completo, es un bot — respondemos "éxito" sin guardar nada para
  // no darle pistas de que fue detectado.
  if (formData.get("company")) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Completá nombre, email y mensaje para poder enviarlo.",
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { status: "error", message: "Revisá el email, no parece válido." };
  }

  const supabase = getSupabaseClient();

  if (!supabase) {
    console.warn(
      "[contacto] Faltan SUPABASE_URL / SUPABASE_ANON_KEY — revisá el .env. Ver README para la guía de configuración.",
    );
    return {
      status: "error",
      message:
        "El formulario todavía no está conectado a la base de datos. Mientras lo configuramos, escribinos directo por WhatsApp 👇",
    };
  }

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    phone: phone || null,
    project_type: projectType || null,
    budget: budget || null,
    message,
    source: "web",
  });

  if (error) {
    console.error("[contacto] Error al insertar en Supabase:", error.message);
    return {
      status: "error",
      message:
        "No pudimos enviar el formulario. Probá de nuevo en un momento o escribinos por WhatsApp.",
    };
  }

  return {
    status: "success",
    message: "¡Listo! Recibimos tu mensaje, te contactamos en menos de 24 horas.",
  };
}
