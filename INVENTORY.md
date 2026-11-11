# Kiểm kê 12 liên kết

Đã quan sát giao diện công khai của từng trang. Các màn hình cần mật khẩu được ghi nhận ở trạng thái khóa; không truy cập dữ liệu phía sau. Các chỉ số dưới đây là **tên chỉ số và chức năng**, không phải dữ liệu đã đồng bộ.

| Nhóm | Ứng dụng | Chỉ số/chức năng thấy được | Nguồn hiện tại | Liên kết |
| --- | --- | --- | --- | --- |
| Nhân viên | KPI nhân viên | Doanh số, HOT, bill, thuốc, lượt khách | Upload Excel | [Apps Script](https://script.google.com/macros/s/AKfycbwYOFhkHeyp_t6EgwDRcVoTroEXLjkkFEHTtII91t6w25I1NYiLNP7OEzsM0covHIRv1Q/exec) · [Blogspot](https://sssslc.blogspot.com/p/push-kpi-shop.html) |
| Nhân viên | KPI dược sĩ vệ tinh | % hoàn thành doanh thu, shop vệ tinh, xếp hạng mốc 130% | Upload Excel | [Apps Script](https://script.google.com/macros/s/AKfycbwy_M-SD0Qh4P0HOEfdn60k5M6uNi9hOp3cOHGwGfaK4vWK0R0Pr2bN_BXRKBP4qYbVGQ/exec) |
| Nhân viên | Data & bill thuốc bầu | Bill, data bầu, tỷ lệ nhập theo ngày và lũy kế, theo nhân viên và vệ tinh | Upload Excel | [Blogspot](https://sssslc.blogspot.com/p/bao-cao-data-bau-input-cua-nv-kv32.html) |
| Nhân viên | Quản trị nhân sự | Headcount, trạng thái, Level CM, chức danh, luân chuyển | Google Sheet và upload Excel | [Apps Script](https://script.google.com/macros/s/AKfycbwIh0QBhNLTXB74HLdHo6fHGG45NTxW0_Iq64sM8bkMlL_g78Q2iQuCB7JwuZ1CFLHoew/exec) |
| Nhà thuốc | KPI quản lý shop | Dashboard, biểu đồ ping push, xếp loại KPI shop | Upload Excel | [Blogspot](https://sssslc.blogspot.com/p/asm-push-kpi-ql-shop.html) |
| Nhà thuốc | Cận date & QA phản hồi | Báo cáo sản phẩm cận date và tra QA theo mã shop | Upload Excel và Google Sheet | [Blogspot](https://sssslc.blogspot.com/p/bao-cao-can-date.html) |
| Trung tâm | KPI trung tâm tiêm chủng | Báo cáo hiệu suất trung tâm | Upload Excel | [Apps Script](https://script.google.com/macros/s/AKfycbwoyn4xSJlpUj7a9uI_9emlWE3iH4l4r8VTT6hvAP5hyjiohGSivFrg-w2MmVdjYBvA/exec) |
| Tư vấn viên | Quản lý chỉ tiêu TVV | Nhập chỉ tiêu, chọn ASM/shop/nhân viên; dashboard ASM có mã truy cập | Google Sheet | [Apps Script](https://script.google.com/macros/s/AKfycbzsbv0hvnXUwGaVjsuVLZ0rFYMxTiigrq8B9_KrRQ96WHPyHIEvfRzPJaaq7O3mgrjHmg/exec) |
| Tư vấn viên | Ping Push TVV | Chỉ tiêu, doanh số, HOT, trung bình bill, gói, lượt khách, KH nhi, bầu | Upload 4 Excel | [Apps Script](https://script.google.com/macros/s/AKfycbxHPTdKqQduqz0As7cbEq4KOsmh9LTo4Km_RaCFK4OK4JexX-EHqecsbBEnmNq6B_7E/exec) |
| Vaccine & KH | Chăm sóc khách hàng vaccine | Dashboard KH, lịch hẹn, doanh số theo TAG/NV, chăm sóc sau tiêm; dashboard có mật khẩu | Google Sheet | [Blogspot](https://sssslc.blogspot.com/p/cham-soc-khach-hang-vaccine.html) |
| Vaccine & KH | Gói vaccine theo độ tuổi | Tra cứu gói, cơ sở và bản in/tải lịch tiêm | Danh mục trong Web App | [Blogspot](https://sssslc.blogspot.com/p/goi-vaccine-theo-do-tuoi.html) |

**Trùng:** `Push KPI Shop` trên Blogspot nhúng đúng Apps Script của `KPI nhân viên`, nên tính là một ứng dụng với hai đường truy cập.

**Giới hạn quan sát:** phần lớn công cụ chỉ hiện biểu mẫu upload khi chưa có file; không thể xác nhận cấu trúc cột Excel, công thức KPI, nơi lưu dữ liệu sau upload hay tính năng ghi vào Sheet từ URL `/exec`.
