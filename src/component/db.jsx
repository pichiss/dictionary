const Contents= {
    inputs : {
    word:'',
    content:'',
    category:''
  },
  dics : [{
    id:1,
    word:'html',
    content:'웹사이트의 모습을 기술하기 위한 마크업 언어.하이퍼텍스트 기술용 언어(Hypertext Mark-up Language)',
    category : 'html',
    createDate : '2024. 05. 07',
    link : 'https://www.notion.so/240124-515e99ca9c2042a2b071b89079439880?pvs=4'
  },{
    id:2,
    word:'css',
    content:'종속형 시트 또는 캐스케이딩 스타일 시트(영어: Cascading Style Sheet)는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어(영어: Style sheet language 스타일 시트 랭귀지)로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이고, 레이아웃과 스타일을 정의할 때의 자유도가 높다. 기본 파일명은 style.css이다.',
    category : 'css',
    createDate : '2024. 05. 07',
    link : 'https://www.notion.so/240124-515e99ca9c2042a2b071b89079439880?pvs=4'
  },{
    id:3,
    word:'js',
    content:'자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용되며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. ',
    category : 'js',
    createDate : '2024. 05. 07',
    link : 'https://www.notion.so/240124-515e99ca9c2042a2b071b89079439880?pvs=4'
  },{
    id:4,
    word:'node',
    content:'Node.js는 크로스플랫폼 오픈소스 자바스크립트 런타임 환경으로 윈도우, 리눅스, macOS 등을 지원한다. Node.js는 V8 자바스크립트 엔진으로 구동되며, 웹 브라우저 바깥에서 자바스크립트 코드를 실행할 수 있다.',
    category : 'node',
    createDate : '2024. 05. 07',
    link : 'https://www.notion.so/240124-515e99ca9c2042a2b071b89079439880?pvs=4'
  },{
    id:5,
    word:'react',
    content:'리액트(React, React.js 또는 ReactJS)는 자바스크립트 라이브러리의 하나로서[2] 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다',
    category : 'react',
    createDate : '2024. 05. 07',
    link : 'https://www.notion.so/240124-515e99ca9c2042a2b071b89079439880?pvs=4'
  },{
    id:6,
    word:'useState',
    content:'useState는 컴포넌트에 state 변수를 추가할 수 있는 React Hook이다.const [state, setState] = useState(initialState)',
    category : 'react',
    createDate : '2024. 05. 07',
    link : 'https://www.notion.so/240124-515e99ca9c2042a2b071b89079439880?pvs=4'
  }]
}
const reducer = (state, action)=>{

      switch(action.type){
          case 'create' :
              return{
                  inputs : Contents.inputs,
                  dics : state.dics.concat(action.dic)
              }
          case 'remove' :
              return{
                  ...state,
                  dics:state.dics.filter((item)=>item.id !== action.id)
              }
          case 'edit' :
              return{
                  ...state,
                  dics: state.dics.map((item)=>item.id===action.id?
                      {...item,
                        content : action.content,
                      } :item)
              }
               case "search" : 
               return{
                ...state,
                dics : state.dics.filter((item)=>{return(
                    item.word.toLowerCase().includes(action.text.toLowerCase()) ||
                    item.content.toLowerCase().includes(action.text.toLowerCase())
                )})
               }
              default :
              return state
      }
  }
  
  export {Contents, reducer}