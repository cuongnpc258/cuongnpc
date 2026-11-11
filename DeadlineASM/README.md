# Deadline ASM · Ping Push Portal

Trang web giao việc và theo dõi deadline cho ASM. Bản đang dùng được triển khai bằng Google Apps Script gắn với Sheet [DEADLINE GIAO VIỆC VÙNG MIỀN ĐÔNG](https://docs.google.com/spreadsheets/d/1-zOnA0POjrq6cY_lk2dewGp41is0stswDdJ9SHjIZhQ/edit). Trang Sites trong `dist/index.html` mở bản Apps Script đã triển khai trên cùng giao diện web.

## Chức năng

- Chọn nhóm thực hiện: Team Kinh Doanh, Team Hàng Hoá, Team Đào Tạo, Team QA, Team MKT, RSM và DRSM.
- Chọn vai trò theo dõi: ASM, QL, NV, BST và NV VX.
- Tạo, sửa, xóa công việc; theo dõi deadline, ưu tiên, trạng thái và người tham gia.
- Xem bảng, Kanban, bộ lọc quá hạn/sắp hạn, tìm kiếm và số liệu tổng quan.
- Soạn nội dung ping từng việc hoặc hàng loạt để sao chép và gửi qua kênh bạn chọn.
- Đọc và ghi công việc trực tiếp vào tab `Tasks` của Google Sheet qua Apps Script.

## Chạy tại máy

Phục vụ thư mục `dist/` bằng một HTTP server tĩnh rồi mở `index.html`. Không cần bước build. Bản Apps Script chính thức: https://script.google.com/macros/s/AKfycbxH6sB77sXeUO8CicIF3hPJGYfdTfQKcJ5JdpwJxuigx-XqnTnIp2889fsRut7YslYM8w/exec

## Lưu ý dữ liệu

`dist/local-backup.html` giữ bản cũ từng lưu dữ liệu riêng trong trình duyệt để người dùng có thể xuất bản sao nếu đã nhập dữ liệu trước khi nâng cấp. `Code.gs` cục bộ là mã tham chiếu cũ; nguồn đang chạy là dự án Apps Script của Sheet, phiên bản triển khai 6.

`dist/index.html` là giao diện được xuất bản. `.openai/hosting.json` chứa cấu hình triển khai Sites, không chứa khóa truy cập.
