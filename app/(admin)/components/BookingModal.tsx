"use client";

import { Modal, Form, Input, DatePicker, TimePicker, Select } from "antd";
import {
  CreateBookingRequest,
  Booking,
} from "@/app/services/booking/booking.service";
import dayjs, { type Dayjs } from "dayjs";
import { useEffect } from "react";

type BookingFormValues = Omit<CreateBookingRequest, "tanggal" | "jam"> & {
  tanggal: Dayjs;
  jam: Dayjs;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateBookingRequest, id?: number) => void;
  initialValues?: Booking | null;
};

export function BookingModal({
  open,
  onClose,
  onSubmit,
  initialValues,
}: Props) {
  const [form] = Form.useForm<BookingFormValues>();

  // isi form kalau edit
  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        ...initialValues,
        tanggal: dayjs(initialValues.tanggal),
        jam: dayjs(initialValues.jam, "HH:mm"),
      });
    }
  }, [initialValues, form]);

  const handleFinish = (values: BookingFormValues) => {
    const payload: CreateBookingRequest = {
      ...values,
      tanggal: values.tanggal.toISOString(),
      jam: values.jam.format("HH:mm"),
    };

    onSubmit(payload, initialValues?.id);
    form.resetFields();
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      onOk={() => form.submit()}
      title={initialValues ? "Edit Booking" : "Create Booking"}
      okText="Simpan"
      cancelText="Batal"
      centered
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item name="nama" label="Nama" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="whatsapp"
          label="Whatsapp"
          rules={[{ required: true }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item name="nopol" label="Nomor Plat" rules={[{ required: true }]}>
          <Input style={{ textTransform: "uppercase" }} size="large" />
        </Form.Item>

        <Form.Item name="service" label="Layanan" rules={[{ required: true }]}>
          <Select
            options={[
              { label: "Cuci Mobil", value: "Cuci Mobil" },
              { label: "Cuci Motor", value: "Cuci Motor" },
            ]}
            size="large"
          />
        </Form.Item>

        <Form.Item name="tanggal" label="Tanggal" rules={[{ required: true }]}>
          <DatePicker style={{ width: "100%" }} size="large" />
        </Form.Item>

        <Form.Item name="jam" label="Jam" rules={[{ required: true }]}>
          <TimePicker format="HH:mm" style={{ width: "100%" }} size="large" />
        </Form.Item>

        <Form.Item name="status" label="Status">
          <Select
            options={[
              { label: "PENDING", value: "PENDING" },
              { label: "CONFIRMED", value: "CONFIRMED" },
            ]}
            size="large"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
