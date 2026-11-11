# Deadline ASM · Ping Push Portal

Trang web giao việc và theo dõi deadline cho ASM, dựa trên `Code.gs` và `Index.html` do người dùng cung cấp.

## Chức năng

- Quản lý nhân sự theo vai trò ASM, QL, NV, BST và NV VX.
- Tạo, sửa, xóa công việc; theo dõi deadline, ưu tiên, trạng thái và người tham gia.
- Xem bảng, Kanban, bộ lọc quá hạn/sắp hạn, tìm kiếm và số liệu tổng quan.
- Soạn nội dung ping từng việc hoặc hàng loạt để sao chép và gửi qua kênh bạn chọn.
- Xuất và nhập bản sao JSON. Dữ liệu được lưu trong `localStorage` của từng trình duyệt.

## Chạy tại máy

Phục vụ thư mục `dist/` bằng một HTTP server tĩnh rồi mở `index.html`. Không cần bước build.

## Lưu ý dữ liệu

Bản web đã xuất bản là bản dùng độc lập trên từng trình duyệt. Nó chưa đọc hoặc ghi Google Sheet; muốn đồng bộ công việc giữa nhiều người cần kết nối backend được cấp quyền. File `Code.gs` được giữ cục bộ làm mã tham chiếu cho bản Apps Script bound với Sheet và không được đưa lên trang web tĩnh.

`dist/index.html` là giao diện được xuất bản. `.openai/hosting.json` chứa cấu hình triển khai Sites, không chứa khóa truy cập.
