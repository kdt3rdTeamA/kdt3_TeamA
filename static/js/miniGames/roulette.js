const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);


const product = [
  "양식", '중식', "한식", "일식", "분식", "양식", '중식', "한식", "분식",
];

const colors = ["#ff8e7f", "#6ccad0", "#cbbeb5", "#f7ae09", "#929292", "#ff8e7f", "#6ccad0", "#cbbeb5", "#f7ae09", "#cbbeb5", "#929292"];

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
    
    setTimeout(() => alert(
      `오늘의 메뉴는?! ${product[ran]} 어떠신가요?`, 1
    ), 2000);
    
    
    if (product[ran] =='양식') {
        setTimeout(() => {
          setTimeout(() =>location.href='/roulette_yang', 2000);
        }, 1);
    }

    if (product[ran] =='분식') {
        setTimeout(() => {
          setTimeout(() =>location.href='/roulette_bun', 2000);
        }, 1);
    }

    if (product[ran] =='일식') {
        setTimeout(() => {
          setTimeout(() =>location.href='/roulette_il', 2000);
        }, 1);
    }

    if (product[ran] =='중식') {
        setTimeout(() => {
          setTimeout(() =>location.href='/roulette_jung', 2000);
        }, 1);
    }

    if (product[ran] =='한식') {
        setTimeout(() => {
          setTimeout(() =>location.href='/roulette_han', 2000);
        }, 1);
    }
  }, 1);

  
};

newMake();


