// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "You can find more projects on github.com/jmseo1204",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-본인이-택한-불행",
        
          title: '본인이 택한 불행 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "나는 요즘 행복한가? 분명 그렇다. 정확히는 오늘은, 이 순간만 보면 그렇다고 대답할 것이다. 그러나 순간의 감정은 수시로 변하지 않는가. 그래서 보통 이런 류의 질문을 받으면 (비록 상대는 아무생각없이 던진 질문이겠지만) 답변을 번복하지 않기 위해, &#39;요즘&#39;을 대표할 수 있는 대답을 하기 위해 내가 처한 객관적인 상황을 떠올린다. 나는 교환학생에 와 있지...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/224090352583?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-first-day-of-actively-searching-for-study-abroad-program",
        
          title: 'First day of actively searching for Study-Abroad program <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "It has been a couple of days after making my mind to apply grad school in US. There is no much time to prepare my admission, so strategic and agile action is necessarily needed. The first movement was...",
        section: "Posts",
        handler: () => {
          
            window.open("https://velog.io/@jmseo1204/First-day-of-actively-searching-for-Study-Abroad-program", "_blank");
          
        },
      },{id: "post-미국살이",
        
          title: '미국살이 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "며칠 전, 한국산업기술진흥원 KIAT에서 주관하는 장학프로그램을 이수하러 에리조나에 다녀왔다. 이곳에 온 다른 한국 학생들과 교류하며 몇 번이고 무슨 연구를 하고싶은지, 해외 대학원 진학 생각이 있는지 질문을 받았다. 나는 그럴 때마다 &#39;저는 현재 SLAM을 연구하며, 앞으로 Computer Vision AI 연구실에 들어가고 싶고, 미박에 관심이 있다&#39;는...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/224082110793?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-떨어뜨린-트로피",
        
          title: '떨어뜨린 트로피 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "며칠 전, 친구에게서 평범한 안부 문자를 받았다. &quot;교환학생 생활은 즐거워?&quot; 나는 쉽게 그렇다고 대답할 수 없었다. 사람들은 교환학생의 기억이 이후 몇 년 간의 삶의 원동력이 된다고들 한다. 객관적으로 이곳은 아름답고, 여유롭다. 그것을 바라보는 내 자세만이 불편할 뿐이다. 난 교환학생의 기간을 일종의 도전과제로 생각하고 있다. 큰 자원(시간, 돈, 경험...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/224071024099?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-소유냐-존재냐",
        
          title: '소유냐 존재냐 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "오후 6시, Torrey Pines Gliderport cliff에서 석양이 지는 것을 바라보며 나는 그이에게 말했다. &quot;이상하게도 난 바다를 봐도, 석양을 바라봐도 크게 감정이 격양되지 않아. 다만 나중에 추억으로 이 순간이 남아있길 바라는 것 같아.&quot; &quot;신기하네. 난 지금 이 순간순간이 즐겁고 행복해서 살아. 내가 즉흥적으로 끌리는 것에 뛰어드는 이유도...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/224052533912?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-적응",
        
          title: '적응 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "캘리포니아 샌디에고에 온 지 약 2주가 지났다. 비슷한 시기에 이곳에 온 대학생들은 본인이 아직 적응 중이기에 본인의 원래 일에 집중하기 어렵다고들 한다. 나도 막상 온 기간이 얼마 되지 않았으니 막연히 적응되어가고 있겠지 싶었지만, 솔직히 시간이 지난다고 이 모든 막연함이 해결될 지 확실하진 않았다. 지금 나는 일상의 많은 것이 아직 불편하고, 두렵다. ...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/224030355442?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-원동력",
        
          title: '원동력 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "얼마 전에 7세 고시에 대한 뉴스를 인상깊게 본 것이 기억난다. 갈수록 줄어드는 아이들은 그 안에서 도태되지 않기 위해 자아가 제대로 형성되기도 전에 무엇을 배워야하는지 윗세대로부터 강요받는다. 강요하는 것 자체가 문제일까? 윗세대는 어떤 지식을 선택적으로 흡수하는 것이 이후의 삶을 살아가는데 효율적인지 잘 알고있다. 현명한 선택을 하도록 돕는 것 자체는 ...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/223856239064?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-의미",
        
          title: '의미 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "누군가 나에게 묻는다. &quot;너는 꿈이 있어?&quot; 나는 대답한다. &quot;좋아하는 거라면 있는데, 꿈은 잘 모르겠네&quot; 꿈에 대한 질문을 받을 때마다 조마조마함을 느끼게 된다. 무언가 그럴듯한 대답을 내놓아야할 것 같은데, 머리를 굴려봐도 적당한 게 떠오르지 않았다. 딱 적당히 야망있고 적당히 넘어갈만한 그런 대답을 찾는 내가 왠지 초라했다. 24년도 1학기가 시작하기...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/223532465123?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-24년-1학기-그리고-그-전을-돌아보며",
        
          title: '24년 1학기, 그리고 그 전을 돌아보며 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "글을 얼마만에 적어보는 건지 잘 모르겠다. 분명 군대에 있을 때는 떠오르는 생각을 종종 글로 정리하곤 했는데, 전역한 뒤로 너무 많은 일이 있다보니 글쓰는 걸 소홀히 하게됐다. 그런데 최근 1학기 종강을 하고, 내 삶의 방향성에 대한 고민이 필요하겠다 싶어 블로그에 들어왔다. 뭐, 간단하게 리뷰부터 해보자. 리뷰보다는.. 회상일 것 같기도 하다. --- 군...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/223532454985?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-늘어난-섬유의-부분-수축-방법",
        
          title: '늘어난 섬유의 부분 수축 방법 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "과제해야하니까 기억 보존하는 용으로 대충 적겠다. 전역하고 옷을 좋아하게 됐지만 가난한 나머지 중고로 조금씩 사고 있다. 중고거래를 통해 최대 효용을 누리는 집단 중 하나가 바로 의류 구매자인데, 전자제품같은 여타 복잡한 물품에 비해 상대적으로 매물 하자를 손쉽게 파악할 수 있기 때문이다. 애초에 니트류나 얇은 면티같은 소모성 의류가 아닌 이상 옷에 하자가...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/223382642311?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-우리는-열심히-살아야하나",
        
          title: '우리는 열심히 살아야하나? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "## 발단 우리 부대 내에는 무슨 주제든 상관없이 발표를 할 수 있는 기회가 1년에 2번씩 주어진다. 이번에 부대 홈페이지가 DB 용량 문제를 앓으면서 업그레이드된 서버로 이주를 하기에 내가 입대하기도 몇 년 전으로부터 이어진 부대의 역사를 돌아보았다. 그 중 꽤나 재밌는 주제가 있어서 같은 생활관의 ace kdh와 토론을 하기 위해 글을 적는다. 사실 꽤...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/223068635102?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-저를-알고싶습니다",
        
          title: '저를 알고싶습니다. <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "블로그는 나에게 있어서 꽤나 특별한 공간이다. 나의 생각이 바깥으로 퍼져나가는 유일한 창구이자 미래의 나를 위해 현재를 기록하는 곳이다. 다른 사람이 나의 속마음을 들여다볼 수 있다는 점에서 블로그에 글을 쓰기 시작했다. 또한 같은 이유로 나는 몇 개월 전부터 나의 속마음을 어디에도 보여주고싶지 않았기에 로컬에 일기를 써왔다. 그럼에도 다시 내가 이 곳을 ...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222911362218?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-성장해야한다는-강박",
        
          title: '성장해야한다는 강박 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "220820 02:47 | 생활관 &gt; 정말 오랜만이다. 블로그.. 근 며칠 간 자책과 자기혐오를 너무 해오다가 어찌어찌 블로그를 찾게 됐다. 분명 아무 문제가 없었음에도 밤에 잠들기 전마다 계속 날 의심했다. 난 뭔가 잘 가고있다는 생각이 들지 않았다. 분명 훈련소와 특기학교의 나는 이렇게 나약하지 않았다. 그때그때 무슨 일을 하는 것이 좋은지 명확하게 파...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222853081138?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-저-군대-갑니다-고마웠어요-모두",
        
          title: '저 군대 갑니다. 고마웠어요 모두. <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2022년 3월 21일 오전 2시 31분 | 침대에서&gt; 안녕하세요. 이 &#39;정민의 생각 조각 기록소&#39; 블로그를 운영하고있는 서정민입니다. 아실 분들은 알고 계시겠지만, 저는 2022년 3월 21일부터 1년 9개월 간 대한민국 공군으로서 국방의 의무를 다하게 되었습니다. 그래서 당분간 블로그와의 접점이 뜸해질 것 같다는 생각이 듭니다. 물론 사회에 있을 때도 ...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222678399435?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-서파이더맨-수트-제작기",
        
          title: '서파이더맨 수트 제작기 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2022년 3월 4일 오후 4시 23분 | 내 방에서&gt; 혹시 영화 스파이더맨을 본 적이 있는가? 스파이더맨은 어린 시절부터 내가 좋아해온 몇 안되는 캐릭터 중에 하나이다. 과거에는 싸우는 액션이 재밌어서 봤다면, 지금은 주인공 피터 파커가 너무 좋아서 봤던 것 같다. 수학과학에 탁월한 재능을 가지고 사진 찍는 취미가 있으며 스케이트 보드를 타기도 하고 거미...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222663900267?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-겨울-방학-나기2",
        
          title: '겨울 방학 나기2 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2022 9시 43 | 합정에서 서울역 막차 타려고 뛰어가는 와중&gt; 술을 마셨다. 오랜만이다 이런 기분. 그냥.. 인스타그램은 의도적으로 안하고 이런데 뭔가 내 감정을 표출하고싶어서 이렇게 블로그에서라도 근 일주일에 대해 글을 써보려 한다. 최근 나는 사람들을 만난다. 내가 신경쓰지는 못했던, 그렇지만 나에게 어떤 영향을 주고 있었던 사람들. 혹은, 내가 ...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222654130143?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-스키장-탈출-스토리",
        
          title: '스키장 탈출 스토리 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2022년 2월 13일 오전 3시 57분 | 송도 라마다 호텔에서&gt; 친구들과 여행을 갔다. 여행 와서 이렇게 글을 쓰게될 줄은 몰랐지만, 나 빼고는 전부 잠들어서 조금씩 들리는 숨소리와 R&amp;B 음악의 조화로운 고요함, 따뜻한 물로 씻고 샤워 가운을 입은 채로 침대에 누운 포근함, 호텔 특유의 조명이 주는 따스함. 뭐 이런 게 있어서 자연스럽게 블로그에 들어...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222646144694?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-스승님에게는-존경을-벗에게는-관대함을",
        
          title: '스승님에게는 존경을, 벗에게는 관대함을. <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2022년 2월 9일 오전 3시 30분 | 본가 거실 식탁에서&gt; 요즘 내가 빠져있는 모델{이자 유튜버(이자 연예인)} 이 한 명 있다. 주우재라는 분인데, 무표정으로 헛소리를 진지하게 하거나 정말 그렇게 생각하는 것 같은 모멘트들이 내 유머 코드와 너무 잘맞아서 그가 나오는 영상은 새벽 늦게까지 챙겨봤던 것 같다. 뭐.. 글의 주제와 조금 엇나가지만 내가 ...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222642677334?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-입대-전-겨울-방학-나기-1",
        
          title: '입대 전 겨울 방학 나기 1 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2022년 1월 24일 오전 12시 40분 | 강원도 집에서&gt; 요근래 나는 2021년 2학기 종강을 하고 입대(3월 21일)를 하기 전까지 여유로운 겨울 방학을 보내고 있다. 2학기 종강하기 전까지만 해도 이번 방학 땐 노래 가사도 써보고 독서(전공 말고..)도 해보고 하는 계획을 세웠는데 알고리즘이라는 친구 하나에 푹 빠져버리는 바람에 계획한 건 많이 이...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222629601309?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-39-너의-췌장을-먹고-싶어-39-를-보고",
        
          title: '&#39;너의 췌장을 먹고 싶어&#39;를 보고 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "큰 일이 있었다. 의지를 잃었다. 나의 주변엔 사람이 없었고, 홀로 남았다. 무언가에라도 빠져서, 거기서 나오고싶지 않았다. 그리고 이 애니메이션 영화를 발견했다. 짧은 줄거리. 주인공은 소설에 빠져 살면서, 주변 사람과 가까워지는 것을 두려워하고, 현실을 달가워하지 않아 소설 속 이야기라는 이상에 정신을 맡기는 것을 좋아하는 남학생이었다. 그런 주인공은 ...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222603191368?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-공학-engineering-학습법",
        
          title: '공학(Engineering) 학습법 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2021년 12월 19일 오후 7시 33분, 강원도 본가 내 방에서 오늘은 글쓴이가 공대에서 학습하는 방법을 시험 준비 과정 위주로 적어보려 한다. 이 글은 내가 전기정보공학부에서 2년 동안 살아남으며 얻은 노하우이기도 하고, 2년 동안 군대에 다녀와서 바보가 된 미래의 나를 위한 글이다. *이하는 글쓴이의 공부 방식이니, 배우는 분야가 다르거나 공부 방식...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222599476534?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-2021년-2학년-2학기-마무리",
        
          title: '2021년, 2학년 2학기 마무리 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2021년 12월 17일 오후 4시 30분, 처음 와보는 낙성대역 카페 &#39;공차&#39;에서 크리스마쑤 음악을 들으며(야호) 어제 마지막 시험을 치고, 기숙사로 들어와서 푹 쉬다가 왔다. 솔직히 이렇게 힘들 줄은 몰랐다. 분명 중간고사가 끝나면 많은 글을 쓰고싶었는데, 어째 학기말이 다가올수록 배우는 내용도 어려워지고 시험과 더불어 기말 프로젝트도 하고.. 별 일이...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222598318402?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-2학년-2학기-대학생의-휴식",
        
          title: '2학년 2학기, 대학생의 휴식 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2021년 11월 4일 오후 6시 25분, 낙성대역 메가커피에서 하하.. 드디어 중간고사라는 것이 끝나버렸다. 마지막 시험이었던 &#39;Introduction to electromagnetism with practice&#39;(영어 강의라 강의명이 참 길다.. 아마 한국어 강의명으론 기초 전자기학 연습일 것이다.) 의 두 번째 중간고사를 수요일 저녁에 3시간 동안 치...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222558641844?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-리뷰-최고의-계산기를-찾아서",
        
          title: '[리뷰] 최고의 계산기를 찾아서 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "#Ti-nspire_CX_II_CAS #SpeedCrunch #MATLAB 안녕! 오늘은 나처럼 고통받는 공대생을 구제하고자 내가 가진 물건(+프로그램)을 리뷰해보려 해. 주제는 바로 계산기! (* 프로그램+실제 계산기)  혹시 당신은 실험 보고서를 쓸 때 윈도우-기본 계산기를 쓰는가? 뭐.. 사실 나도 대학교 새내기일 때 기본 계산기만 사용해서 물...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222547953308?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-학자에-대하여",
        
          title: '학자에 대하여 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "나는 인재인가? 언제나 고민해왔던 그것. 우리는 학점에 의해 자신의 능력을 평가당하는 사회에 살고있다. 그래서 동기들과 주어진 학점을 놓고 제로섬 게임을 한다. 그러다 최선의 노력을 다했음에도 결과가 좋지 않으면, 나는 그 분야에 대해 덜떨어진 사람이 된다. 나는 이게 옳은 방식인지에 대해.. 의문을 가진다. 10월 23일 새벽 3시쯤에 내가 거의 유일하게...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222545495459?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-일탈과-여행이-주는-삶의-원동력-1",
        
          title: '일탈과 여행이 주는 삶의 원동력(1) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2021. 10. 21. 목요일. 오후 5시 1분 7개의 시험 중 4개의 시험을 치면서 드디어 지옥의 중간고사 기간이 절반 이상 지나갔다.. 역시 인생은 쉽지 않은 것 같다. 오늘 대학영어 중간고사와 과학기술글쓰기 실험 보고서 발표를 끝마치고 난 뒤, 너무 피곤해서 기숙사 침대에 쓰러졌다. 그렇게 한 숨 자고 일어났는데.. 뭐랄까 할 일은 아직 많은데 하루...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222544115214?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-간절함을-느끼고싶었던-하루",
        
          title: '간절함을 느끼고싶었던 하루 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2021. 10. 7. 오후 5시 33분 오랜만에 키보드에 손을 댄다. 무슨 말로 시작해야할까.. 몇 주 전, 카투사 지원을 하고, 방금은 육군-기술행정병 지원서를 넣고 왔다. 카투사 지원을 넣을 때까지만 해도 아무렇지 않았던 마음이 조금씩 요동치기 시작하는 것 같다. . 지원서를 넣으며 고3때 학교에서 스터디카페로 이동하면서 들었던 노래를 들었다. 아직도...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222530005601?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-가치와-보여주는-행위의-관계",
        
          title: '가치와 보여주는 행위의 관계 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2020년 9월 3일 오전 1시 52분. 집 앞 스터디 카페에서. IELTS 공부하다 너무 지쳐서 글을 쓰게 되었다. 이 글의 도입은 이틀 전, 2학기 개강 당일로부터 이다. 아... 죠졌다.. 거의 10개월 만에 보는 전자기학 퀴즈에 뒷통수를 씨게 맞고, 좌절에 빠져 있었다. 그리고나서 바로 든 생각이 있었는데, 생각이라기 보단 매우 강한 욕구에 가까웠던...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222078817547?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-불타는-청춘과-동경하는-사람-2",
        
          title: '불타는 청춘과 동경하는 사람(2) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "3. 두 사람의 방학은 온도가 달랐다. 그렇게 시작한 여름방학. &quot;이제 막 대학에 온 새내기인데.. 첫 방학은 놀면서 보내야지~&quot; 주변 사람 대부분의 생각은 대체로 위와 같았다. 나 또한 틀린 말은 아니라 생각했기에 대부분의 시간을 술/게임/여행에 소비했다. 날이 갈수록 계좌의 잔고는 점점 줄어들었지만 별다른 걱정이 없이 7월을 보내고 있었다. 그러던 7월...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222071063125?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-불타는-청춘과-동경하는-사람-1",
        
          title: '불타는 청춘과 동경하는 사람(1) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "2020년 8월 16일 오전 7시 21분. 기숙사 침대에서 잠에 들기 직전, 한 블로거(이자 소설가이자 음악가이자 개발자인..)의 글을 보고 마음에 불이 붙는 바람에 글을 쓰게 되었다. 대입이 마무리된 올해 초부터 이 블로그에 글을 써보려 했지만, 학기 중에는 공부하느라 매우 바쁘기도 했고.. 여러 이벤트가 많이 있었기 때문에 글을 쓰기 힘들었었다. 고로,...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/222062649396?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "post-시",
        
          title: '시 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "설날, 새벽 1시 48분, 친할머니 집에서 잠이 오지 않아 sns를 둘러보던 중, 우연히 중학교 동창이 시를 쓴다는 것을 알게 되었다. 단순한 호기심으로 그 애가 운영하는 블로그에 들어가 시를 읽기 시작한 것이 몇 분 지나지 않아, 여러 시는 내 마음을 울리었다. 시가 이런 거였나? 수학, 과학적인 논리 체계성.. 시비가 분명한 가치를 좇으며 고등학생 시절...",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.naver.com/tjwjdals45/221784469017?fromRss=true&trackingCode=rss", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6D%73%65%6F%31%32%30%34@%73%6E%75.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jmseo1204", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jmseo1204", "_blank");
        },
      },{
        id: 'social-velog',
        title: 'Velog',
        section: 'Socials',
        handler: () => {
          window.open("https://velog.io/@jmseo1204", "_blank");
        },
      },{
        id: 'social-naver_blog',
        title: 'Naver_blog',
        section: 'Socials',
        handler: () => {
          window.open("https://blog.naver.com/tjwjdals45", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
