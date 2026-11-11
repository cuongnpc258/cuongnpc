# Trung tâm chỉ số Miền Đông KV32

Trang tĩnh sẵn sàng đưa lên GitHub Pages. Mở `index.html` để xem trước, hoặc đẩy toàn bộ thư mục lên nhánh dùng để xuất bản Pages. Không cần build hay cài package.

## Những gì đã làm

- Kiểm kê 12 URL thành 11 ứng dụng; `Push KPI Shop` trên Blogspot trùng với ứng dụng KPI nhân viên ở link Apps Script trực tiếp.
- Phân nhóm: Nhân viên, Nhà thuốc, Trung tâm, Tư vấn viên, Vaccine & khách hàng.
- Tìm kiếm, lọc nhóm và mở công cụ gốc trong tab mới.
- Bản đồ chỉ số hiển thị nguồn của từng KPI; chưa hiển thị số liệu giả.

## Kết nối dữ liệu thật

Các ứng dụng tải Excel cần file mẫu đã ẩn thông tin cá nhân cùng cách tính KPI để xây bộ nhập liệu dùng chung. Các ứng dụng đọc Google Sheet cần mã Apps Script hoặc API đã được cấp quyền. Dashboard ASM của TVV và dashboard CRM vaccine đang khóa; trang này giữ nguyên quyền truy cập của ứng dụng gốc. Không lưu mật khẩu, dữ liệu nhân viên, dữ liệu khách hàng hoặc khóa API trong repository GitHub Pages công khai.

Nguồn và nhãn công cụ nằm trong `app.js`. Nếu một URL triển khai Apps Script thay đổi, cập nhật trường `url` của công cụ tương ứng.
