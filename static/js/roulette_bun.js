const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);


const product = [
  "김밥", '떡볶이', "순대", "라면", "돈까스", "라볶이", '모둠튀김', "쫄면", "냉면",
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
    if (product[ran] == '김밥') {
      image = "/static/img/roulette_bun/kimbab.jpg";
    }
    if (product[ran] == '떡볶이') {
      image = "/static/img/roulette_bun/dduckboki.PNG";
    }
    if (product[ran] == '순대') {
      image = "/static/img/roulette_bun/sundae.PNG";
    }
    if (product[ran] == '라면') {
      image = "/static/img/roulette_bun/ramian.PNG";
    }
    if (product[ran] == '돈까스') {
      image = "/static/img/roulette_bun/donggass.PNG";
    }
    if (product[ran] == '라볶이') {
      image = "/static/img/roulette_bun/rabboki.PNG";
    }
    if (product[ran] == '모둠튀김') {
      image = "/static/img/roulette_bun/modoom.PNG";
    }
    if (product[ran] == '쫄면') {
      image = "/static/img/roulette_bun/zzolmian.PNG";
    }
    if (product[ran] == '냉면') {
      image = "/static/img/roulette_bun/naegmian.PNG";
    }
    
  }, 1);


};

newMake();
