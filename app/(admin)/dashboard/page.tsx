"use client";

import {
  Table,
  Button,
  Statistic,
  Card,
  Space,
  Input,
  Tag,
  Popconfirm,
} from "antd";
import { ColumnType } from "antd/es/table";
import {
  PlusOutlined,
  ArrowUpOutlined,
  SearchOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import {
  useGetBookings,
  useCreateBooking,
  useUpdateBooking,
  useSearchBooking,
  useDeleteBooking,
  useGetBookingToday,
} from "@/app/services/booking/useBooking";
import { BookingModal } from "../components/BookingModal";
import { useState } from "react";
import type {
  Booking as BookingType,
  CreateBookingRequest,
} from "@/app/services/booking/booking.service";
import type { TablePaginationConfig } from "antd/es/table";
import { useNotification } from "@/app/lib/useMessage";
import dayjs from "dayjs";
import "dayjs/locale/id";

const { Search } = Input;
dayjs.locale("id");

type Status = "PENDING" | "CONFIRMED" | "CANCELED";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const isSearching = searchQuery.trim().length > 0;

  // query
  const {
    data: bookings,
    isLoading: isLoadingAll,
    isError: isErrorAll,
    error: errorAll,
  } = useGetBookings();
  const {
    data: searchResults,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
    error: errorSearch,
  } = useSearchBooking(searchQuery);
  const {
    data: bookingToday,
    isLoading: isLoadingToday,
    isError: isErrorToday,
  } = useGetBookingToday();

  const bookingDataSource = isSearching ? searchResults?.data : bookings?.data;
  const isLoading = isSearching ? isLoadingSearch : isLoadingAll;
  const isError = isSearching ? isErrorSearch : isErrorAll;
  const error = isSearching ? errorSearch : errorAll;
  const isEmpty =
    !isLoading && (!bookingDataSource || bookingDataSource.length === 0);

  const createBooking = useCreateBooking();
  const updateBooking = useUpdateBooking();
  const deleteBooking = useDeleteBooking();

  // handler table
  const handleTableChange = (pag: TablePaginationConfig) => {
    setPagination({
      current: pag.current ?? 1,
      pageSize: pag.pageSize ?? 10,
    });
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    // Reset ke halaman 1 setiap kali search berubah
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

  // feedback UI
  const notification = useNotification();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<BookingType | null>(null);

  const handleEdit = (record: BookingType) => {
    setSelected(record);
    setOpen(true);
  };

  const handleCreate = () => {
    setSelected(null);
    setOpen(true);
  };

  const handleSubmit = (data: CreateBookingRequest, id?: number) => {
    if (id) {
      updateBooking.mutate(
        { id, ...data },
        {
          onSuccess: () => {
            notification.success({
              title: "Booking berhasil diperbarui",
            });
          },
          onError: () => {
            notification.error({
              title: "Gagal memperbarui booking",
            });
          },
        },
      );
    } else {
      createBooking.mutate(data, {
        onSuccess: () =>
          notification.success({
            title: "Booking berhasil dibuat",
          }),
        onError: () =>
          notification.error({
            message: "Gagal membuat booking",
          }),
      });
    }

    setOpen(false);
  };

  const handleDelete = (id: number) => {
    deleteBooking.mutate(id, {
      onSuccess: () =>
        notification.success({
          title: "Booking berhasil dihapus",
        }),
      onError: () =>
        notification.error({
          title: "Gagal menghapus booking",
        }),
    });
  };

  const statusLabel: Record<Status, string> = {
    PENDING: "warning",
    CONFIRMED: "success",
    CANCELED: "error",
  };

  const columns: ColumnType<BookingType>[] = [
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Whatsapp",
      dataIndex: "whatsapp",
      key: "whatsapp",
    },
    {
      title: "Nopol",
      dataIndex: "nopol",
      key: "nopol",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
      render: (tanggal: string) => dayjs(tanggal).format("DD MMMM YYYY"),
    },
    {
      title: "Jam",
      dataIndex: "jam",
      key: "jam",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={statusLabel[status as Status]}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      render: (_: unknown, record: BookingType) => (
        <Space>
          <Button
            style={{ backgroundColor: "#f0b100", color: "#fff" }}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Hapus Booking"
            description="Apakah Anda yakin ingin menghapus booking ini?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button danger type="primary">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <Card variant="borderless">
          <Statistic
            title="Total Booking Masuk Hari Ini"
            value={bookingToday?.data.length}
            prefix={<ArrowUpOutlined />}
            styles={{ content: { color: "#3f8600" } }}
          />
        </Card>

        <Card title="Daftar Booking" variant="borderless">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 justify-end">
              <Search
                placeholder="Cari..."
                onSearch={handleSearch}
                onChange={(e) => {
                  // Reset data saat input dikosongkan
                  if (e.target.value === "") {
                    setSearchQuery("");
                    setPagination((prev) => ({ ...prev, current: 1 }));
                  }
                }}
                allowClear
                style={{ width: 250 }}
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleCreate}
              >
                Tambah Booking
              </Button>
            </div>

            <Table
              dataSource={bookingDataSource}
              columns={columns}
              rowKey="id"
              bordered
              loading={isLoading}
              onChange={handleTableChange}
              scroll={{ x: "max-content" }}
              pagination={{
                current: pagination.current,
                pageSize: pagination.pageSize,
                total: bookingDataSource?.length ?? 0,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "50", "100"],
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} dari ${total} data`,
              }}
              locale={{
                emptyText: isEmpty ? (
                  isSearching ? (
                    // Hasil pencarian tidak ditemukan
                    <div style={{ padding: "32px 0", textAlign: "center" }}>
                      <SearchOutlined
                        style={{ fontSize: 32, color: "#d1d5db" }}
                      />
                      <p style={{ marginTop: 12, color: "#6b7280" }}>
                        Nopol <strong>{searchQuery.toUpperCase()}</strong> tidak
                        ditemukan
                      </p>
                    </div>
                  ) : (
                    // Data masih kosong
                    <div style={{ padding: "32px 0", textAlign: "center" }}>
                      <InboxOutlined
                        style={{ fontSize: 32, color: "#d1d5db" }}
                      />
                      <p style={{ marginTop: 12, color: "#6b7280" }}>
                        Belum ada data booking
                      </p>
                    </div>
                  )
                ) : null,
              }}
            />
          </div>
        </Card>
      </div>

      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        initialValues={selected}
        onSubmit={handleSubmit}
      />
    </>
  );
}
