const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);


const product = [
  "국밥", '비빔밥', "소불고기", "제육볶음", "김치찌개", "된장찌개", '삼겹살', "생선구이", "감자탕",
];

const colors = ["#ee7b33", "#654210", "#005375", "#f1e2cb", "#005375", "#ee7b33", "#654210", "#005375", "#f1e2cb", "#005375", "#005375"];

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
    if (product[ran] == '국밥') {
      image = "/static/img/roulette_han/cookbab.PNG";
    }
    if (product[ran] == '비빔밥') {
      image = "/static/img/roulette_han/bibeambab.PNG";
    }
    if (product[ran] == '소불고기') {
      image = "/static/img/roulette_han/sobulgogi.PNG";
    }
    if (product[ran] == '제육볶음') {
      image = "/static/img/roulette_han/jaeyuk.PNG";
    }
    if (product[ran] == '김치찌개') {
      image = "/static/img/roulette_han/kimchi.PNG";
    }
    if (product[ran] == '된장찌개') {
      image = "/static/img/roulette_han/deunzang.PNG";
    }
    if (product[ran] == '삼겹살') {
      image = "/static/img/roulette_han/sam.PNG";
    }
    if (product[ran] == '생선구이') {
      image = "/static/img/roulette_han/fish.PNG";
    }
    if (product[ran] == '감자탕') {
      image = "/static/img/roulette_han/gamza.PNG";
    }
    
   
  }, 1);
};

newMake();


