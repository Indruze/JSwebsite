"use strict"
document.body.style = "overflow-x:hidden;font-family:'Titillium Web',sans-serif;margin:0;padding:0;height:100%;width:100%";

let frag = document.createDocumentFragment();
    document.body.appendChild(frag);
let fragm = document.createDocumentFragment();
    document.body.appendChild(fragm);
let bottomFragment = document.createDocumentFragment();
    document.body.appendChild(bottomFragment);

let firstSection =document.createElement('div');
let nav = document.createElement('div');
    nav.setAttribute("class", "container");
let navbar = document.createElement("div");
    navbar.setAttribute("class", "row");
let h5 = document.createElement("h5");
    h5.setAttribute("class", "col-lg-5 col-md-3 col-sm-12");
let navbarLogoText = document.createTextNode("Cuda");
let navigation = document.createElement('div');
    navigation.setAttribute("class", "col-lg-7 col-md-9 col-xs-12");
let fragment = document.createDocumentFragment();
let menu = ['Home', 'Services', 'Team', 'Skills', 'Works', 'Reviews', 'Contact'];

menu.forEach(function(x) {
    let a = document.createElement('a');
    a.setAttribute("onclick", "scrollToView(this.name)");
    a.setAttribute("name", "#"+x);
    a.textContent = x;
    fragment.appendChild(a);
    a.style = "text-decoration:none;color:#fff;padding:15px;cursor:pointer;";
});

    document.body.appendChild(firstSection);
    firstSection.appendChild(nav);
    nav.appendChild(navbar);
    navbar.appendChild(h5);
    navbar.appendChild(navigation);
    h5.appendChild(navbarLogoText);
    navigation.appendChild(fragment);

firstSection.style = "width:100%;height:100px;background:#87509c";
nav.style = "color:#fff;";
h5.style = "font-size:50px;font-family:'Lobster',cursive;line-height:100px";
navigation.style = "line-height:100px;text-align:right";

//hero
let secondSection = document.createElement('div');
let hero = document.createElement('div');
    hero.setAttribute("class", "container");
let textDiv = document.createElement('div');
let h4 = document.createElement('h4');
let heroText = document.createTextNode('Hi there! We are the new kids on the block and we build awesome websites and mobile apps.');
let btn = document.createElement('button');
let btnText = document.createTextNode('Work with us!');

    document.body.appendChild(secondSection);
    secondSection.appendChild(hero);
    hero.appendChild(textDiv);
    textDiv.appendChild(h4);
    h4.appendChild(heroText);
    textDiv.appendChild(btn);
    btn.appendChild(btnText);
    balh blah

secondSection.style = "width:100%;padding:70px 0 100px 0;background:#87509c;color:#fff";
textDiv.style = "text-align:center";
h4.style = "font-size:2.7em;font-weight:600;padding-top:80px; margin:0 60px;";
btn.style = "text-transform:uppercase; background:#eb7d4b;color:#fff;border-bottom:5px solid #c86a43;border-top:0;border-left:0;border-right:0;padding:18px 105px;margin-top:80px;cursor:pointer;border-radius:4px;"

let page = [
  { href: 'Services',
    color: "#17c2a4",
    title: 'Services we provide',
    line: "#14a58c",
    text: 'We are working with both individuals and businesses from all over the globe to create awesome websites and applications.',
    content: function(){
      let services = [
        { img: 'img/flag.png',
          title: 'Branding',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur explicabo commodi.'
        },
        { img: 'img/crayon.png',
          title: 'Design',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur explicabo commodi.'
        },
        { img: 'img/gear.png',
          title: 'Development',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur explicabo commodi.'
        },
        { img: 'img/rocket.png',
          title: 'Rocket Science',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur explicabo commodi.'
        }
      ];
      for(let i = 0; i < services.length; i++){

        let objDiv = document.createElement('div');
            objDiv.setAttribute("class", "col-lg-3 col-md-12");
        let card = document.createElement('div');
            card.setAttribute("class", "card");
        let imgAlign = document.createElement('p');
        let cardImg = document.createElement('img');
            cardImg.setAttribute("src", services[i].img);
        let cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body");
        let cardTitle = document.createElement('h6');
            cardTitle.setAttribute("class", "card-title");
        let cardTitleText = document.createTextNode(services[i].title);
        let cardText = document.createElement('p');
            cardText.setAttribute("class", "card-text");
        let cardTextText = document.createTextNode(services[i].text);

            objDiv.appendChild(card);
            card.appendChild(imgAlign);
            card.appendChild(cardBody);
            imgAlign.appendChild(cardImg);
            cardBody.appendChild(cardTitle);
            cardTitle.appendChild(cardTitleText);
            cardBody.appendChild(cardText);
            cardText.appendChild(cardTextText);
            frag.appendChild(objDiv);

            imgAlign.style = "text-align:center";
            card.style = "background:none;border:none";
            cardTitle.style = "padding-top:50px;font-size:1.4em;font-weight:bold;text-align:center;";
            cardText.style = "font-size:1.1em;margin-bottom:5px;margin-top:5px;text-align:center";
            cardImg.style = "height: 124px";
            objDiv.style = "padding-top:60px";
      }
    }
  },
  { href: 'Team',
    color: "#e7f1fF",
    title: 'Meet our beautiful team',
    line: "#c7d9e5",
    text: 'We are a small team of designers and developers, who help brands with big ideas.',
    content: function(){
      let team = [
        { name: 'Anne Hathaway',
          designation: 'CEO / Marketing Guru',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur explicabo commodi.',
        },
        { name: 'Kate Upton',
          designation: 'Creative director',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur explicabo commodi.'
        },
        { name: 'Olivia Wilde',
          designation: 'Lead Designer',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur explicabo commodi.'
        },
        { name: 'Ashley Greene',
          designation: 'SEO / Developer',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur explicabo commodi.'
        }
      ];
      let soc = [
        { fontawesome: 'fab fa-facebook-f',
          href: 'www.facebook.com'
        },
        { fontawesome: 'fab fa-twitter',
          href: 'www.twitter.com'
        },
        { fontawesome: 'fab fa-linkedin-in',
          href: 'www.linkedin.com'
        },
        { fontawesome: 'fas fa-envelope',
          href: 'www.gmail.com'
        }
      ];
      for(let i = 0; i < team.length; i++){

        let objDiv = document.createElement('div');
            objDiv.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
        let card = document.createElement('div');
            card.setAttribute("class", "card");
        let cardImg = document.createElement('div');
        let cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body");
        let cardTitle = document.createElement('h6');
            cardTitle.setAttribute("class", "card-title");
        let cardTitleText = document.createTextNode(team[i].name);
        let designation = document.createElement('p');
        let designationText = document.createTextNode(team[i].designation);
        let cardText = document.createElement('p');
            cardText.setAttribute("class", "card-text");
        let cardTextText = document.createTextNode(team[i].text);

        for(let i = 0; i < soc.length; i++){

          let a = document.createElement('a');
              a.setAttribute('href', soc[i].href);
          let icon = document.createElement('i');
              icon.setAttribute("class", soc[i].fontawesome);

              a.appendChild(icon);
              fragm.appendChild(a);

              icon.style = "font-size:0.8em;background:#ccc;color:#fff;padding:10px;border-radius:50%;width:32px;height:32px;display:inline-block;margin:3px 5px";
              a.style = "margin:0;padding:0;font-size:100%;text-decoration:none";
        }
        objDiv.appendChild(card);
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardTitle.appendChild(cardTitleText);
        cardBody.appendChild(designation);
        designation.appendChild(designationText);
        cardBody.appendChild(cardText);
        cardText.appendChild(cardTextText);
        cardBody.appendChild(fragm);
        frag.appendChild(objDiv);

        card.style = "background:none;border:none;text-align:center";
        cardTitle.style = "padding-top:10px;font-size:1.4em;font-weight:bold;text-align:center;";
        cardText.style = "font-size:1.1em;margin-bottom:5px;margin-top:5px;text-align:center";
        designation.style = "color:#30bae7;padding-bottom:10px;font-size:1.1em;text-align:center;margin:0";
        cardImg.style = "background: #878787;border-radius:100%;height:140px;width:140px;margin:auto;";
        objDiv.style = "padding-top:60px";
      }
    }
  },
  { href: 'Skills',
    color: "#fff",
    title: 'We got skills!',
    line: "#dfe8ed",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, set do eiusmod tempor incididunt ut labore et dolore magna eliqua.',
    content: function(){
      let skils = [
        { name: 'Web design',
          canvas: 'img/images_02.png'
        },
        { name: 'HTML / SCC',
          canvas: 'img/images_04.png'
        },
        { name: 'Graphic design',
          canvas: 'img/images_05.png'
        },
        { name: 'Ui / Ux',
          canvas: 'img/images_07.png'
        }
      ];
        for(let i = 0; i < skils.length; i++){

          let objDiv = document.createElement('div');
              objDiv.setAttribute("class", "col-lg-3 col-md-6 col-sm-12");
          let card = document.createElement('div');
              card.setAttribute("class", "card");
          let cardImg = document.createElement('img');
              cardImg.setAttribute('src', skils[i].canvas);
          let cardBody = document.createElement('div');
              cardBody.setAttribute("class", "card-body");
          let cardTitle = document.createElement('h6');
              cardTitle.setAttribute("class", "card-title");
          let cardTitleText = document.createTextNode(skils[i].name);

              objDiv.appendChild(card);
              card.appendChild(cardImg);
              card.appendChild(cardBody);
              cardBody.appendChild(cardTitle);
              cardTitle.appendChild(cardTitleText);
              frag.appendChild(objDiv);

          cardTitle.style = "padding-top:10px;font-size:1.4em;font-weight:bold;text-align:center;text-transform:uppercase";
          card.style = "background:none;border:none";
          cardImg.style = "height: 124px;margin:auto";
          objDiv.style = "padding-top:60px";
      }
    }
  },
  { href: 'Works',
    color: "#ffdd99",
    title: 'Our portfolio',
    line: "#e5c37f",
    text: 'Neque porro quisquam est, qui dolorem ispum quia dolor sit amet consectetur, adipisci velit, sed quia non nomquam.',
    content: function(){
      let buttonRow = document.createElement('div');
      let filter = ['All', 'Web', 'Apps', 'Icons'];
      let buttonFragment = document.createDocumentFragment();
      let bottomButtonRow = document.createElement('div');
      let btnPortfolio = document.createElement('button');
      let btnTextPortfolio = document.createTextNode('Load more projects');

      filter.forEach(function(x) {
          let button = document.createElement('button');
          button.textContent = x;
          buttonFragment.appendChild(button);
          button.style = "background:#ebc985;padding:7px 24px;margin-right:5px;color:#111;text-transform:uppercase;border-radius:4px;border: none;";
      });
  let portfolio = [
    { name: 'Isometric perpective mock-up',
      img: 'img/images_32.png'
    },
    { name: 'Time zone app ui',
      img: 'img/images_35.png'
    },
    { name: 'Viro media players ui',
      img: 'img/images_40.png'
    },
    { name: 'Blog magazine flat ui kit',
      img: 'img/images_42.png'
    }
  ];

  for(let i = 0; i < portfolio.length; i++){
      let objDiv = document.createElement('div');
          objDiv.setAttribute("class", "col-lg-6 col-md-12");
      let card = document.createElement('div');
          card.setAttribute("class", "card");
      let cardImg = document.createElement('img');
          cardImg.setAttribute('src', portfolio[i].img);
      let cardBody = document.createElement('div');
          cardBody.setAttribute("class", "card-body");
      let cardTitle = document.createElement('h6');
          cardTitle.setAttribute("class", "card-title");
      let cardTitleText = document.createTextNode(portfolio[i].name);

            objDiv.appendChild(card);
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardTitle.appendChild(cardTitleText);
            frag.appendChild(objDiv);

        cardTitle.style = "padding-top:10px;font-size:1.4em;font-weight:bold;text-align:center;text-transform:uppercase";
        card.style = "background:none;border:none";
        cardImg.style = "margin:auto";
        objDiv.style = "padding-top:60px";
      }
      fragm.appendChild(buttonRow);
      buttonRow.appendChild(buttonFragment);
      fragm.appendChild(buttonFragment);
      bottomFragment.appendChild(bottomButtonRow);
      bottomButtonRow.appendChild(btnPortfolio);
      btnPortfolio.appendChild(btnTextPortfolio);
      buttonRow.style = "text-align:center";
      btnPortfolio.style = "background:#17c2a4;border-bottom:5px solid#14a58c;margin-top:30px;padding:18px 95px;color:#fff;text-transform:uppercase;border-top:0;border-left:0;border-right:0;border-radius:4px;";
      bottomButtonRow.style = "text-align:center";
    }
  },
  { href: 'Reviews',
    color: "#d74680",
    title: 'What people say about us',
    line: "#b93c6e",
    text: 'Our clients love us!',
    content: function(){
      let reviews = [
        { comment: '"Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque."',
          name: 'Chanel Iman',
          designation: 'CEO of Pinterest'
        },
        { comment: '"Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta"',
          name: 'Adriana Lima',
          designation: 'Founder of instagram'
        },
        { comment: '"Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta"',
          name: 'Anne Hathaway',
          designation: 'Lead designer at Behance'
        },
        { comment: '"Phaselus non purus vel arcu tempor commodo. Fusce semper, pusrus vel luctus molestie, risus sem cursus neque."',
          name: 'Emma Stone',
          designation: 'Co-founder of Shazam'
        }
      ];

      for(let i = 0; i < reviews.length; i++){

        let objDiv = document.createElement('div');
            objDiv.setAttribute("class", "col-lg-6 col-md-12");
        let cardImg = document.createElement('div');
        let cardBody = document.createElement('div');
        let cardComment = document.createElement('h6');
        let cardCommentText = document.createTextNode(reviews[i].comment);
        let name = document.createElement('p');
        let nameText = document.createTextNode(reviews[i].name);
        let designation =document.createElement('div');
        let cardDesignation = document.createElement('p');
        let cardDesignationText = document.createTextNode(reviews[i].designation);

            objDiv.appendChild(cardImg);
            objDiv.appendChild(cardBody);
            objDiv.appendChild(designation);
            cardBody.appendChild(cardComment);
            cardComment.appendChild(cardCommentText);
            designation.appendChild(name);
            name.appendChild(nameText);
            designation.appendChild(cardDesignation);
            cardDesignation.appendChild(cardDesignationText);
            frag.appendChild(objDiv);

        cardImg.style = "border-radius:100%;background:#787878;padding:10px;margin-right:50px;margin-bottom:50px;float:left;height:100px;width:100px";
        name.style = "text-transform:uppercase;font-weight:600;font-size: 1.4em;";
        cardComment.style = "line-height: 27px;font-size:1.2em;font-weight: 300;";
        cardDesignation.style = "color: #ffdd99;font-style:italic;font-size: 1.1em;margin-bottom:5px;margin-top:5px;font-weight: 400;";
        objDiv.style = "padding:30px 0 30px 0;"
      }
    }
  },
   { href: 'Contact',
     color: "#3c5499",
     title: 'Get in touch',
     line: "#273a71",
     text: '1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111',
     content: function(){
       let touchFragment = document.createDocumentFragment();
       let placeholder = ['*Your Name', '*Your Email'];
       let textArea = document.createElement('textarea');
           textArea.setAttribute('placeholder', '*Your Message')
       let col12 = document.createElement('div');
           col12.setAttribute('class', 'col-md-12');
       let touchButtonRow = document.createElement('div');
       let touchButton = document.createElement('button');
       let btnTextTouch = document.createTextNode('Send Message');

       placeholder.forEach(function(x) {
         let objDiv = document.createElement('div');
             objDiv.setAttribute("class", "col-lg-6 col-md-12");
         let inputGroup = document.createElement('div');
             inputGroup.setAttribute('class', 'input-group');
         let input = document.createElement('input');
             input.setAttribute('placeholder', x);

             objDiv.appendChild(inputGroup);
             inputGroup.appendChild(input);
             touchFragment.appendChild(objDiv);

             input.style = "background:#273a71;border:0;color:#fff;width:100%;padding:6px 12px;font-size:14px;";
             objDiv.style = "padding-bottom: 30px;"
     });
     frag.appendChild(touchFragment);
     frag.appendChild(col12);
     col12.appendChild(textArea);
     bottomFragment.appendChild(touchButtonRow);
     touchButtonRow.appendChild(touchButton);
     touchButton.appendChild(btnTextTouch);
     textArea.style = "background:#273a71;border:none;padding:5px;width:100%;height:170px;color:#fff;font-size:0.9em";
     touchButtonRow.style = "text-align:center";
     touchButton.style = "background:#30bae7;border-bottom:5px solid#29a0c7;margin-top:30px;padding:18px 95px;color:#fff;text-transform:uppercase;border-top:0;border-left:0;border-right:0;border-radius:4px;";
     }
   }
];
for(let i = 0; i < page.length; i++){

  let Section = document.createElement('div');
  let name = document.createElement('h4');
  let title = document.createTextNode(page[i].title);
  let line = document.createElement('div');
  let p = document.createElement('p');
      p.setAttribute('id', page[i].href);
  let text = document.createTextNode(page[i].text);
  let container = document.createElement('div');
      container.setAttribute("class", "container");
  let row = document.createElement('div');
      row.setAttribute("class", "row");
  page[i].content();

    document.body.appendChild(Section);
    Section.appendChild(name);
    name.style.color = '#17c2a4';
    name.appendChild(title);
    Section.appendChild(line);
    Section.appendChild(p);
    p.appendChild(text);
    Section.appendChild(fragm);
    Section.appendChild(container);
    container.appendChild(row);
    row.appendChild(frag);
    Section.appendChild(bottomFragment);

    Section.style = "background: " + page[i].color + " ;padding:110px 0px 110px 0;width:100%;color:#000;";
    name.style = "text-align:center;font-size:2.7em;font-weight:600;text-transform:uppercase";
    line.style = "width:87px;height:3px;background:"+ page[i].line +";margin:0 auto;margin-bottom: 15px;";
    p.style = "font-size:1.2em;font-weight:300;line-height:25px;padding:10px;text-align:center;"
}

let footerSection = document.createElement('div');
let footer = ['Facebook', 'Twitter', 'Google+', 'Linkedin', 'Behance', 'Dribbble'];
let footerFragment = document.createDocumentFragment();

footer.forEach(function(x) {
  let a = document.createElement('a');
  a.setAttribute("href", x);
  a.textContent = x;
  footerFragment.appendChild(a);
  a.style = "text-decoration:none;color:#fff;padding:15px;";
});

  document.body.appendChild(footerSection);
  footerSection.appendChild(footerFragment);

footerSection.style = "background:#344b8e;padding-top:40px;padding-bottom:40px;border-top:1px solid #4C68B9;text-align:center;";

window.onscroll = function() {showButton()};
function showButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scroll.style.display = "block";
  } else {
      scroll.style.display = "none";
  }
}
function scrollToView(x) {
    document.querySelector(x).scrollIntoView({ behavior: 'smooth' });
}
function scrollTopAnimated(){
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}
let scroll = document.createElement('button');
  scroll.setAttribute("onclick", 'scrollTopAnimated()');

document.body.appendChild(scroll);

scroll.style = "position:fixed;right:20px;bottom:20px;z-index:50;display:none;width:35px;height:35px;border-width:4px;border-style:solid;border-color:transparent;background-color:#918f89;background-image:url(img/back-to-top.png);background-position:center center;"
