"use client";

import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import type { LoginRequest } from "@/app/services/auth/auth.service";
import { useAuth } from "@/context/AuthContext";
import { useNotification } from "@/app/lib/useMessage";

const { Title, Text } = Typography;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const { login } = useAuth();

  const notification = useNotification();

  const onFinish = async (values: LoginRequest & { remember: boolean }) => {
    setLoading(true);
    try {
      await login({ email: values.email, password: values.password });
      notification.success({
        title: "Login berhasil!",
        description: "Selamat datang di MJA Management System.",
        placement: "topRight",
        duration: 3,
      });
      router.push("/dashboard");
    } catch (error: unknown) {
      const msg =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message ?? "Email atau password salah.";
      notification.error({ title: "Login gagal", description: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title level={3} style={styles.title}>
        MJA MANAGEMENT SYSTEM
      </Title>
      <Text style={styles.subtitle}>Masukkan akun untuk akses ke sistem</Text>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={styles.form}
        requiredMark={false}
      >
        {/* Email */}
        <Form.Item
          name="email"
          label={<span style={styles.label}>Email</span>}
          rules={[
            { required: true, message: "Email wajib diisi" },
            { type: "email", message: "Format email tidak valid" },
          ]}
        >
          <Input
            placeholder="cth@email.com"
            size="large"
            // style={styles.input}
          />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          label={<span style={styles.label}>Password</span>}
          rules={[{ required: true, message: "Password wajib diisi" }]}
        >
          <Input.Password
            placeholder="Masukkan password"
            size="large"
            // style={styles.input}
          />
        </Form.Item>

        {/* Submit */}
        <Form.Item style={{ marginBottom: "0" }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            block
            style={styles.submitBtn}
          >
            Masuk
          </Button>
        </Form.Item>
      </Form>

      {/*<Divider style={styles.divider}>
        <Text style={styles.dividerText}>Belum punya akun?</Text>
      </Divider>

      <Link href="/register" style={styles.registerLink}>
        Daftar sekarang
      </Link>*/}
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  title: {
    margin: 0,
    textAlign: "center",
    color: "#111827",
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: "-0.4px",
  },
  subtitle: {
    color: "#6b7280",
    fontSize: "14px",
    textAlign: "center",
    display: "block",
    marginBottom: "28px",
    marginTop: "4px",
  },
  form: {
    marginTop: "4px",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#374151",
  },
  submitBtn: {
    height: "44px",
    fontWeight: 600,
    fontSize: "15px",
    background: "#CC0000",
    border: "none",
    borderRadius: "8px",
    letterSpacing: "0.2px",
    margin: "16px 0 24px 0",
  },
  divider: {
    margin: "24px 0 16px",
    borderColor: "#e5e7eb",
  },
  dividerText: {
    fontSize: "13px",
    color: "#9ca3af",
  },
  registerLink: {
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: 600,
    color: "#CC0000",
    textDecoration: "none",
    padding: "10px",
    border: "1.5px solid rgba(204,0,0,0.25)",
    borderRadius: "8px",
    transition: "all 0.2s",
  },
};
