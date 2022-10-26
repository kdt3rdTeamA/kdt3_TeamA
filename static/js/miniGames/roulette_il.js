const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);


const product = [
  "초밥", '돈카츠', "라멘", "소바", "스키야키", "오니기리", '오코노미야키', "야키토리", "우동",
];

const colors = ["#ff8500", "#6ccad0", "#ffc501", "#fcd8c0 ", "#929292", "#ff8e7f", "#6ccad0", "#cbbeb5", "#fcd8c0", "#ffc501", "#ff8500"];

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
    if (product[ran] == '초밥') {
      image = "/static/img/roulette_il/chobab.PNG";
    }
    if (product[ran] == '돈카츠') {
      image = "/static/img/roulette_il/donkkach.PNG";
    }
    if (product[ran] == '라멘') {
      image = "/static/img/roulette_il/ramian_j.PNG";
    }
    if (product[ran] == '소바') {
      image = "/static/img/roulette_il/soba.PNG";
    }
    if (product[ran] == '스키야키') {
      image = "/static/img/roulette_il/sukiyaki.PNG";
    }
    if (product[ran] == '오니기리') {
      image = "/static/img/roulette_il/onigiri.PNG";
    }
    if (product[ran] == '오코노미야키') {
      image = "/static/img/roulette_il/okonomi.PNG";
    }
    if (product[ran] == '야키토리') {
      image = "/static/img/roulette_il/yakitori.PNG";
    }
    if (product[ran] == '우동') {
      image = "/static/img/roulette_il/woodong.PNG";
    }
  }, 1);


};

newMake();
