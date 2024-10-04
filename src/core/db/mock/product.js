import pro_01 from "../../../assets/product/pr_01.png";
import pro_02 from "../../../assets/product/pr_02.png";
import pro_03 from "../../../assets/product/pr_03.png";
import pro_04 from "../../../assets/product/pr_04.png";

export const CATES = {
  KITCHEN: "kitchen",
  ELECTRIC: "elictric",
  CLOTHES: "clothes",
  COSMETICS: "cosmetics",
};

const productData = {
  data: [
    {
      id: 1,
      label: "Nồi hấp Inox",
      cate: CATES?.KITCHEN,
      price: 95200,
      img: pro_01,
      rate: 4.9,
      sale: 8200,
      description:
        "Nồi hấp Inox chất lượng cao, giúp nấu chín thực phẩm mà không cần thêm dầu mỡ, giữ nguyên hương vị và giá trị dinh dưỡng.",
    },
    {
      id: 2,
      label: "Nồi hấp đa năng 2 tầng",
      cate: CATES?.KITCHEN,
      price: 700000,
      img: pro_02,
      rate: 4.9,
      sale: 2500,
      description:
        "Nồi hấp 2 tầng với thiết kế tiện lợi, cho phép bạn hấp nhiều loại thực phẩm cùng lúc. Phù hợp cho gia đình lớn hoặc khi tổ chức tiệc.",
    },
    {
      id: 3,
      label: "Sạc dự phòng",
      price: 111200,
      cate: CATES?.ELECTRIC,
      img: pro_03,
      rate: 5.0,
      sale: 2900,
      description:
        "Sạc dự phòng mạnh mẽ với dung lượng lớn, giúp bạn sạc đầy thiết bị di động mọi lúc mọi nơi. Thiết kế nhỏ gọn, dễ dàng mang theo.",
    },
    {
      id: 4,
      label: "Nồi hấp đa năng 3 tầng",
      price: 212000,
      cate: CATES?.KITCHEN,
      img: pro_04,
      rate: 4.8,
      sale: 1200,
      description:
        "Nồi hấp 3 tầng với khả năng nấu ăn nhanh chóng và hiệu quả, giúp bạn thưởng thức món ăn tươi ngon và đầy đủ dinh dưỡng. Dễ dàng vệ sinh sau khi sử dụng.",
    },
    {
      id: 5,
      label: "Áo thun lạnh cổ tròn dập vân hoa cao cấp",
      cate: CATES?.CLOTHES,
      price: 25000,
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liikysuorb4c09@resize_w450_nl.webp",
      rate: 4.8,
      sale: 1200,
      description: `
        Áo thun cổ tròn thời trang nam, thoitrangdep.88
        Thông số size Áo thun có cổ thời trang nam, shop thoitrangdep.88
        Size M phù hợp với người có cân nặng từ 40-53kg
        Size L phù hợp với người có cân nặng từ 54-64kg
        Size XL phù hợp với người có cân nặng từ 65-75kg
        Quý khách lưu ý: Bảng size còn tùy thuộc vào chiều cao và cân nặng từ từng người, vui lòng liên hệ shop để được tư vấn với size phù hợp. 

        Thông tin sản phẩm Áo thun cổ tròn thời trang nam thoitrangdep.88
        Với thiết kế đơn giản và rất trẻ trung phù hợp với nhiều đối tượng 
        ➡ Chất liệu vải áo là vải thun lạnh thể thao co giãn, nhập khẩu cao cấp, không bai, không xù, không phai màu khi giặt máy, giặt tay...
        ➡ Logo được ép nhiệt cộng nghệ cao và bền đẹp không nhiễm màu 
        Được sản xuất trên công nghệ hiện đại và đội ngũ thợ lành nghề, được gia công tại xưởng ở Hà Nội`,
    },
    {
      id: 6,
      label:
        "Áo Bomber Jacket Tay Nhún Nam nữ - dù 2 lớp dày dặn form rộng siêu xinh",
      cate: CATES?.CLOTHES,
      price: 149000,
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lydkvodkduap47@resize_w450_nl.webp",
      rate: 4.8,
      sale: 1200,
      description: `
      Hướng dẫn chọn size:
      -Size M: Dưới 55kg ~ Cao dưới 1m60
      -Size L: từ 56-65kg ~ Cao 1m61-1m70
      -Size XL: từ 66kg-77kg ~ Cao 1m71-1m8
      *Lưu ý: Bảng size mang tính chất tham khảo tương đối, phù hợp với 90% khách hàng khi mua hàng tại 22.

      🌸 Là khách hàng của, chúng tôi cam kết bạn sẽ được:
      1. Sản phẩm giống mô tả và hình ảnh thật 100% của store.
      2. Đảm bảo chất lượng vải và chất lượng hình in.
      3. Hỗ trợ đổi size cho phù hợp.

      Hướng dẫn sử dụng sản phẩm
      - Giặt ở nhiệt độ bình thường, với đồ có màu tương tự.
      - Không được dùng hóa chất tẩy.
      - Hạn chế sử dụng máy sấy và ủi (nếu có) thì ở nhiệt độ thích hợp.

      Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.`,
    },
    {
      id: 7,
      label:
        "Tai Nghe Bluetooth Không Dây P47 Chống Tiếng Ồn Thông Minh 360 Độ°Tai Nghe Trùm Đầu Chơi Game Chất Lượng Cao",
      cate: CATES?.ELECTRIC,
      price: 200000,
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvea-lhok3j9k3tpzb5@resize_w450_nl.webp",
      rate: 4.8,
      sale: 1200,
      description: `
      Chúng tôi cam kết cung cấp cho khách hàng những sản phẩm mạnh mẽ và dịch vụ tuyệt vời .Mua Sản phẩm của chúng tôi từ Shopee mà không cần lo lắng vì chúng tôi đảm bảo chúng là hàng thật và tươi mới 100.

      Thỏa sức mua sắm của bạn trong cửa hàng của chúng tôi và có một ngày tuyệt vời .

      Sau khi nhận hàng , bạn có thể tự tin kiểm tra hàng hóa , hãy thử sản phẩm , nếu bạn cảm thấy khó chịu hoặc sai , vui lòng liên hệ với chúng tôi , chúng tôi sẽ hoàn lại tiền cho bạn`,
    },
    {
      id: 8,
      label:
        "Starlight Milan Dây đeo kim loại + Vỏ cho Apple Watch 41mm 40mm 44mm 38mm 42mm 45mm",
      cate: CATES?.ELECTRIC,
      price: 55000,
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-7rd48-lu0f1cnxg6wl5b@resize_w450_nl.webp",
      rate: 4.8,
      sale: 1200,
      description: `
        Thương hiệu: Kỳ lân

        Số mô hình: Đối với Dòng Apple Watch 8 / 7 / 6 / SE / 5 / 4 / 3 / 2 / 1

        Loại móc cài: Khóa kim loại cho Apple Watch

        Tình trạng: Mới với thẻ

        Chiều dài ban nhạc: Khác

        Loại vật liệu ban nhạc: dây đeo kim loại + vỏ

        Xuất xứ: Trung Quốc đại lục

        Loại sản phẩm: Dây đeo đồng hồ

        (1) Xin vui lòng để lại cho chúng tôi một phản hồi tích cực (5 sao), nếu bạn hài lòng với các mặt hàng của chúng tôi. Và bạn có thể chia sẻ với bạn bè của mình trên Facebook, Twitter...Cảm ơn!

        (2) * Nếu bạn nhận được một sản phẩm bị lỗi, vui lòng không để lại đánh giá sao thấp, vui lòng liên hệ với chúng tôi và chúng tôi sẽ hoàn lại tiền cho bạn, cảm ơn bạn đã ghé thăm

        (3) Xin vui lòng cho chúng tôi cơ hội để giải quyết bất kỳ vấn đề. Nếu bạn thích cửa hàng của chúng tôi Xin vui lòng cho chúng tôi năm sao ⭐️⭐️⭐️⭐️⭐️ Cảm ơn bạn đã hào phóng của bạn!!!

        Lưu ý: chỉ bán dây đeo đồng hồ, không bao gồm đồng hồ và hộp đựng đồng hồ`,
    },
    {
      id: 9,
      label:
        "Lược gội đầu bằng silicon mát xa da đầu giảm rụng kích thích mọc tóc",
      cate: CATES?.COSMETICS,
      price: 35000,
      img: "https://down-vn.img.susercontent.com/file/sg-11134201-7rd5s-luado6k7rab971@resize_w450_nl.webp",
      rate: 4.8,
      sale: 1200,
      description: `
      Dầu gội silicon Massage da đầu để giảm rụng tóc và kích thích mọc tóc

      1.Thông tin sản phẩm:

      - Màu sắc: Như Hình ảnh Hiển thị

      - Chất liệu: Nhựa cao cấp + Silicone

      - Kích thước: 3,3x9cm

      - Gói bao gồm:

      1 lược

      2.Lợi thế:

      - Lược Dầu Gội Silicone Nhật Bản Ngăn Rụng Tóc Và Rụng Tóc, Giúp Tóc Mượt Và Kích Thích Mọc Tóc.

      - Lược Được Thiết Kế Có Thể Thúc Đẩy Lưu Thông Máu Tốt Hơn (Dùng Lược Chải Tóc Trước Khi Đi Ngủ Để Có Giấc Ngủ Ngon Hơn).

      - Thiết kế tinh tế, nhỏ gọn và thiết thực.

      - Lược silicon làm từ chất liệu PP và TPE an toàn và không làm tổn thương da đầu.

      Lược này cũng có thể được sử dụng để thoa Gel, sáp và phồng trong quá trình tạo kiểu.

      Nó Đủ Nhẹ Nhàng Để Giữ Cho Tóc Và Da Đầu Khỏe Mạnh Và Sống Động.

      Lược Hoàn Hảo Để Tắm Hàng Ngày Và Mọi Loại Tóc.

      Làm sạch bụi bẩn và tẩy tế bào chết khi gội đầu.

      - Thúc đẩy tuần hoàn máu và tăng sức sống cho da đầu và sức sống của tóc.

      - Thích hợp để sử dụng hàng ngày`,
    },
    {
      id: 10,
      label:
        "Bộ cọ trang điểm 14 món cọ trang điểm nội địa trung cọ trang điểm màu Xanh cao cấp lông siêu HZMBB0189",
      cate: CATES?.COSMETICS,
      price: 89000,
      img: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lm00lnoewijoe0@resize_w450_nl.webp",
      rate: 4.8,
      sale: 1200,
      description: `
      * Lưu ý về cách sử dụng các loại cọ trong 1 bộ cọ.

      Các loại cọ có thể thay thế chức năng cho nhau tuỳ vào các sử dụng của mỗi người. Cụ thể như:

      - Cọ nền: Giúp bạn dễ dàng tán kem nền hiệu quả.

      - Cọ tán phấn: Cọ ăn phấn, mềm giúp bạn dễ dàng tán phấn đều mặt.

      - Cọ che khuyết điểm: Giúp bạn che những khuyết điểm trên gương mặt tối ưu.

      - Cọ tạo khối: Đường đi của cọ mềm mại và khá dễ sử dụng.

      - Cọ mắt: Giúp bạn dễ dàng mix những màu phấn mắt đều đẹp.

      - Cọ mí mắt: Cọ mảnh nên vẽ đường mí mắt sẽ cực đẹp.

      - Cọ son: Lông mềm, nên tô lòng môi hay full môi đều ổn.

      - Cọ lông mày: Tán đều phấn lên lông mày của bạn một cách nhẹ nhàng, đẹp không thua kém gì cây kẻ mày.

      - Cọ hightlight: Giúp bạn đánh highlight đẹp, tạo đường nét cho khuôn mặt.

      - Cọ phấn mắt: Kích thước vừa đủ, giúp bạn tán đều phấn mắt.

      - Cọ bầu mắt: Giảm đi độ sưng húp của bầu mắt, mang đến cho bạn đôi mắt long lanh.

      - Cọ chuốt: Cọ chuốt lông mày hay lông mi đều cực ổn.

      - Cọ chải lông mày: Giúp tán đều phấn và chải đều lông mày.`,
    },
    {
      id: 11,
      label: "Kệ Đựng Đồ Dùng Nhà Tắm Hình Chữ Nhật Chịu Lực Tốt Tiện Dụng",
      cate: CATES?.KITCHEN,
      price: 48000,
      img: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lik2wtsjob5i10@resize_w450_nl.webp",
      rate: 4.8,
      sale: 1200,
      description: `
      Kích thước kệ phòng tắm ’ 36 * 13 * 15cm (L * H * W)

      Trọng lượng tối đa ' 15-20kg

      Màu đen , trắng

      Chất liệu “ Sắt ( Bề mặt phun sơn chống ăn mòn và chống rỉ

      Màu đen , trắng

      Màu đen , trắng

      Sản phẩm có thể được dán trực tiếp lên tường và có thể dễ dàng lắp đặt mà không cần khoan

      Giúp tiết kiệm không gian phòng tắm`,
    },
    {
      id: 12,
      label:
        "Kệ Để Đồ Trong Suốt Nhiều Tầng Đa Năng Có Bánh Xe, Xe Đẩy Spa, Phòng Bếp, Phòng Tắm Có Lỗ Thoát Nước ( Tặng kèm ống )",
      cate: CATES?.KITCHEN,
      price: 50000,
      img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m08eib8vh4vhd7@resize_w450_nl.webp",
      rate: 4.8,
      sale: 1200,
      description: `
      Kệ đựng đồ đa năng 3 tầng, 4 tầng có bánh xe di chuyển cho Spa, phòng tắm, bếp chất liệu inox cao cấp hàng nhựa trong

    Chất liệu:  Nhựa trong suốt + thép không gỉ

    ✅ Màu sắc: trong suốt + màu bạc kim loại
    ✅ Cân nặng: <2kg ( bao gồm đóng gói)
    ✅ Kích thước 3 tầng: 36.5*24.5*66
    ✅ Thiết kế hiện đại tạo cảm giác sang trọng tinh tế
    ✅ Phù hợp với khu vực có không gian nhỏ hẹp
    ✅ Có bánh xe dễ dàng di chuyển, thích hợp cho các tiệm nail spa...

    Cam kết hàng chuẩn loại 1, chính hãng. Đổi trả thoải mái ngay sau khi nhận hàng trong vòng  72h vì bất cứ lý do gì`,
    },
    // {
    //   id: 5,
    //   label: "",
    //   price: 212000,
    //   img: "",
    //   rate: 4.8,
    //   sale: 1200,
    //   description: ``,
    // },
  ],
};

export default productData;
