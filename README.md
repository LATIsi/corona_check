# 코로나 19 집계 사이트

참고한 관련 사이트   
https://www.youtube.com/watch?v=DtLhiMxgsm0

이 동영상으로 클론코딩을 하며 api관련 react 공부를 하고, 추가적으로 기능을 몇개 추가할 예정.  
react-chartjs-2로 차트 라이브러리를 받아왔습니다.

axiox get방식으로 가져오므로 포스트맨으로 api안의 요소를 확인하여 필요한것들을 가져오는 방식으로 하였습니다.
Module not found: Can't resolve 'chart.js' 오류가 떠   
npm install --save chart.js 으로 라이브러리를 추가했습니다.  

그러나 map 관련 오류가 떠 찾아보니  
react-chartjs-2, chart.js의 버전들이 안맞아 메뉴얼을 찾아서

**npm install --save chart.js@^2.9.4 react-chartjs-2@^2.11.2**  
로 서로가 호환되는 버전을 설치해주었습니다.


----


https://www.chartjs.org/docs/latest/  
chartjs

https://react-chartjs-2.netlify.app/docs/chartjs-v2/  
react-chartjs-2의
## Using with Chart.js v2
참고,

  저는 Chart.js v2이니   
**npm install --save chart.js@^2.9.4 react-chartjs-2@^2.11.2**  
으로 하였으며, 만약 Chart.js v3으로 변환시  
**npm install --save chart.js@^3.6.0 react-chartjs-2@latest**  
를 해주어야합니다.

chart의 도넛형, 라인형, 바형을 가져와 활용합니다.

-----
 
## API 관련
 useEffect로 상태를 변화시켜줍니다.  
 axios.get(api 주소)
로 axios로 api 받아오는데  
async와 await 를 넣어주어, axios를 다 받아온뒤에 다음을 실행합니다  


# 추가한 것
2020, 2021 데이터가 전부 들어와 일단 구별갈수있게 년, 월을 추가했습니다

-----
## 추가할점 

- 2년치가 쌓였으니 라벨별로 구분을 할 생각입니다.
- 해외(일본, 중국, 미국)의 코로나 집계수의 기능도 추가할 예정입니다
- 디자인 관련해서 수정을 할 예정입니다.