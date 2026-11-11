# Hướng xử lý cho nhiều Web App Apps Script

## 1. Giữ hệ thống hiện tại hoạt động

Web GitHub Pages trong bộ này là cổng truy cập và bản đồ chỉ số. Người dùng mở đúng công cụ gốc, các quyền/mật khẩu gốc vẫn do Apps Script quản lý. Đây là cách triển khai nhanh mà không phải sửa 10 dự án cùng lúc.

## 2. Chuẩn hóa dữ liệu để có số tổng hợp thật

Chọn một ứng dụng upload Excel tiêu biểu để làm mẫu. Cần xác định: file nguồn, sheet/tên cột, ngày báo cáo, mã nhân viên, mã shop, mã trung tâm, công thức KPI, cách xử lý bản upload lặp và nơi lưu kết quả. Sau đó tạo bảng dữ liệu chuẩn dùng chung, ví dụ `ngày – kỳ – nhóm – mã đơn vị – mã nhân viên – chỉ số – giá trị – nguồn – thời điểm cập nhật`. Đối chiếu kết quả mới với Web App gốc trước khi đưa vào sử dụng.

Các ứng dụng chỉ xử lý file trong trình duyệt sẽ không tự sinh dữ liệu chung sau khi người dùng đóng trang. Muốn tự cập nhật dashboard, cần đưa kết quả upload vào một nguồn được kiểm soát, chẳng hạn Google Sheet/Drive hoặc một backend riêng. Với ứng dụng đã ghi vào Sheet, có thể đọc bảng tổng hợp hiện có nếu quyền và công thức phù hợp.

## 3. Thu mã nguồn theo lô

URL Web App `/exec` là địa chỉ triển khai, không phải đường đọc mã nguồn. Cần URL **trình biên tập Apps Script** hoặc **Script ID** của từng dự án, cùng quyền đọc phù hợp. Google cung cấp Apps Script API `projects.getContent` để lấy tất cả file `.gs`, `.html` và `appsscript.json` của một dự án; công cụ `clasp` của Google có thể clone/pull dự án ra thư mục. Như vậy không cần dán từng file dài vào chat.

Kèm theo mỗi dự án: ID Google Sheet liên quan, tên các tab/cột và một file Excel mẫu đã ẩn dữ liệu cá nhân. Không chia sẻ OAuth token, `.clasprc.json`, mật khẩu hay dữ liệu khách hàng thật. Lưu bản sao mã nguồn và dữ liệu nhạy cảm trong kho riêng; GitHub Pages công khai chỉ chứa giao diện.

## 4. Cách triển khai sau khi có nguồn

1. Hoàn thiện cổng công cụ và đưa lên repository GitHub Pages do bạn chọn.
2. Kết nối một KPI mẫu, đối chiếu với ứng dụng gốc.
3. Tách quyền xem dữ liệu nhân viên, shop, trung tâm và TVV ở backend.
4. Mở rộng theo từng nhóm, bỏ link/ứng dụng trùng và chuẩn hóa ngày/kỳ báo cáo.
5. Chỉ chuyển hẳn khỏi Apps Script khi tất cả luồng đọc, ghi, upload và quyền truy cập đã được kiểm thử.
