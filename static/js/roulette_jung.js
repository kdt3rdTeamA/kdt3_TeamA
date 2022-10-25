const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);


const product = [
  "짜장면", '짬뽕', "마라탕", "꿔바로우", "마라샹궈", "깐풍기", '잡채밥', "팔보채", "마파두부밥",
];

const colors = ["#ff8e7f", "#6ccad0", "#cbbeb5", "#ffe4e1 ", "#929292", "#ff8e7f", "#6ccad0", "#cbbeb5", "#ffe4e1", "#cbbeb5", "#929292"];

const newMake = () => {
    const [cw, ch] = [$c.width / 2, $c.height / 2];
    const arc = Math.PI / (product.length / 2);
  
    for (let i = 0; i < product.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[i % (colors.length -1)];
      ctx.moveTo(cw, ch);
      ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
      ctx.fill();
      ctx.closePath();
    }

    ctx.fillStyle = "#fff";
    ctx.font = "18px Pretendard";
    ctx.textAlign = "center";

    for (let i = 0; i < product.length; i++) {
      const angle = (arc * i) + (arc / 2);

      ctx.save()  ;

      ctx.translate(
        cw + Math.cos(angle) * (cw - 50),
        ch + Math.sin(angle) * (ch - 50),
      );

      ctx.rotate(angle + Math.PI / 2);

      product[i].split(" ").forEach((text, j) => {
        ctx.fillText(text, 0, 30 * j);
      });

      ctx.restore();
    }
}

const rotate = () => {
  $c.style.transform = `initial`;
  $c.style.transition = `initial`;
  
  setTimeout(() => {
    
    const ran = Math.floor(Math.random() * product.length);

    const arc = 360 / product.length;
    const rotate = (ran * arc) + 3600 + (arc * 3) - (arc/4);
    
    $c.style.transform = `rotate(-${rotate}deg)`;
    $c.style.transition = `2s`;
    
    setTimeout(() => Swal.fire({
      title: `${product[ran]} 당첨!`,
      text: `오늘의 메뉴는?! ${product[ran]} 어떠신가요?`,
      imageUrl: image,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    }), 2000);
    let image;
    if (product[ran] == '짜장면') {
      image = "/static/img/zzazang.PNG";
    }
    if (product[ran] == '짬뽕') {
      image = "/static/img/zzambbong.PNG";
    }
    if (product[ran] == '마라탕') {
      image = "/static/img/maratang.PNG";
    }
    if (product[ran] == '꿔바로우') {
      image = "/static/img/gguobarou.PNG";
    }
    if (product[ran] == '마라샹궈') {
      image = "/static/img/marasang.PNG";
    }
    if (product[ran] == '깐풍기') {
      image = "/static/img/gganpunggi.PNG";
    }
    if (product[ran] == '잡채밥') {
      image = "/static/img/jabchebab.PNG";
    }
    if (product[ran] == '팔보채') {
      image = "/static/img/palbochae.PNG";
    }
    if (product[ran] == '마파두부밥') {
      image = "/static/img/mapatopu.PNG";
    }
  }, 1);


};

newMake();
