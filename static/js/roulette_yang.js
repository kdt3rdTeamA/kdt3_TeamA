const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);


const product = [
  "피자", '샐러드', "파스타", "스테이크", "리조또", "햄버거", '토스트', "샌드위치", "치킨",
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
    if (product[ran] == '피자') {
      image = "/static/img/roulette_yang/pizza.PNG";
    }
    if (product[ran] == '샐러드') {
      image = "/static/img/roulette_yang/salad.PNG";
    }
    if (product[ran] == '파스타') {
      image = "/static/img/roulette_yang/pasta.PNG";
    }
    if (product[ran] == '스테이크') {
      image = "/static/img/roulette_yang/steak.PNG";
    }
    if (product[ran] == '리조또') {
      image = "/static/img/roulette_yang/rizzotto.PNG";
    }
    if (product[ran] == '햄버거') {
      image = "/static/img/roulette_yang/hamburgur.PNG";
    }
    if (product[ran] == '토스트') {
      image = "/static/img/roulette_yang/toast.PNG";
    }
    if (product[ran] == '샌드위치') {
      image = "/static/img/roulette_yang/sandwitch.PNG";
    }
    if (product[ran] == '치킨') {
      image = "/static/img/roulette_yang/chicken.PNG";
    }
  }, 1);


};

newMake();
