let mainText = document.querySelector("h2");
let textString = mainText.textContent; //Solution Value SOLVA
let split = textString.split(""); //S,o,l,u,t,i,o,n, V,a,l,u,e, S,O,L,V,A
mainText.textContent = "";

// textContent와 innerHTML, innerText
// Element.innerHTML : HTML 내에 텍스트를 동적으로 변경할 때 사용되며 Element의 속성이다
// 값에 태그들을 삽입하면 자동으로 인식한다.
// Element.innerHTML = '<h1>test</h1>';
// Element.innerText : html내에 텍스트를 동적으로 변경할 때 사용되며 htmlElement의 속성

// textContent, innerHTML, innerText는 모두 DOM 요소의 내용을 조작하는 데 사용되는 속성입니다. 그러나 각각의 차이점이 있습니다.

// textContent:
// 요소의 모든 자식 요소의 텍스트 콘텐츠를 반환합니다.
// HTML 마크업을 고려하지 않고 순수한 텍스트만을 반환합니다.
// 텍스트를 가져오거나 설정할 때 사용됩니다.

// innerHTML:
// 요소의 HTML 콘텐츠를 나타냅니다.
// 텍스트 뿐만 아니라 HTML 태그도 반환하거나 설정할 수 있습니다.
// 내부 HTML 구조를 수정하거나 삽입할 때 사용됩니다.
// 그러나 사용 시 보안상의 위험이 있으므로 사용자 입력을 직접 innerHTML에 삽입하는 것은 좋은 방법이 아닙니다.

// innerText:
// 요소의 렌더링된 텍스트 콘텐츠를 반환합니다.
// CSS에 의해 숨겨진 요소나 스타일에 영향을 받은 텍스트는 반환하지 않습니다.
// 주로 사용자가 보는 내용을 가져올 때 사용됩니다.

// 간단하게 말하면, textContent는 텍스트만을 다루고 innerHTML은 HTML을 다루며, innerText는 렌더링된 텍스트만을 다룹니다. 
//요소의 콘텐츠를 조작할 때 이러한 차이를 고려하여 적절한 속성을 선택하는 것이 중요합니다.


for (let i = 0; i < split.length; i++) {
  mainText.innerHTML += `<span>${split[i]}<span>`;
}

let tl = gsap.timeline();
tl.from("span", {
  y: -500,
  opacity: 0,
  scrollTrigger: {
    pin: true,
    scrub: 1,
    trigger: "section",
  },
  stagger: {
    amount: 2
  }
})
// .to("h3", {
//   y: -500,
//   opacity: 0,
//   scrollTrigger: {
//     pin: true,
//     scrub: 1,
//     trigger: "section",
//   },
//   stagger: {
//     amount: 2
//   }
// })