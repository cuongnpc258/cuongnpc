# Đưa web lên GitHub bằng MacBook

## Bước 1 — Tạo tài khoản GitHub

Mở [github.com/signup](https://github.com/signup), tạo tài khoản cá nhân, xác minh email và lưu lại **tên đăng nhập GitHub**. Bạn tự nhập mật khẩu và hoàn tất các bước xác minh/đồng ý điều khoản. Không gửi mật khẩu hoặc mã xác minh cho người khác.

## Bước 2 — Đăng trang web lần đầu

1. Đăng nhập GitHub, chọn **New repository**. Đặt tên, ví dụ `trung-tam-chi-so-mien-dong`, chọn **Public** và tạo repository.
2. Trong repository, chọn **Add file → Upload files**.
3. Từ thư mục web đã được chuẩn bị, kéo các file `index.html`, `styles.css`, `app.js`, `favicon.svg` vào vùng upload. Có thể kéo thêm các file `.md` để lưu hướng dẫn. **Không upload file `.xlsx`, Google Sheet xuất ra, mật khẩu hay mã nguồn Apps Script có thông tin nhạy cảm.**
4. Chọn **Commit changes**. Kiểm tra `index.html` nằm ngay ở thư mục gốc của repository.
5. Vào **Settings → Pages**. Ở **Build and deployment**, chọn **Deploy from a branch**, nhánh `main`, thư mục `/(root)`, rồi **Save**.
6. Đợi GitHub hiện URL dạng `https://TEN-DANG-NHAP.github.io/trung-tam-chi-so-mien-dong/`. Mở URL để kiểm tra.

## Bước 3 — Đẩy bản cập nhật từ MacBook

1. Cài [GitHub Desktop](https://desktop.github.com/) từ trang chính thức và đăng nhập tài khoản GitHub.
2. Trong GitHub Desktop, chọn **File → Clone repository**, chọn repository website vừa tạo và chọn nơi lưu trên MacBook.
3. Khi cần cập nhật web, chép các file website mới vào thư mục vừa clone, thay file cũ.
4. Mở GitHub Desktop, nhập mô tả thay đổi ở ô **Summary**, bấm **Commit to main**, rồi **Push origin**. GitHub Pages sẽ xuất bản bản mới từ nhánh `main`.

## Với các Web App Google Apps Script

Giữ mã `Code.gs`, `Index.html`, file Excel mẫu, khóa và dữ liệu Sheet trong một repository **Private** riêng. Repository website Public chỉ chứa giao diện và link công cụ. Để xuất mã nguồn nhiều dự án mà không phải chép từng file, dùng `clasp` hoặc Apps Script API với **URL trình biên tập/Script ID** và quyền đọc từng dự án; URL `/exec` không đủ để tải mã nguồn.
