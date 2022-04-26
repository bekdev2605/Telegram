const root = document.querySelector(".root")

const data = [{
        name: "Alisher",
        img: './img/chats/alisher.jpg',
        chats: [{
                message: "Nima gaplar ?",
                from: "Alisher",
                time: "11:06"
            },
            {
                message: "Alhamdulillah tinchlik ozilardachi ?",
                from: "You",
                time: "11:09"
            },
            {
                message: "Yaxshi rahmat Allohga shukr oqishlar yaxshimi uydagilar hammasi yaxshimi nima yangiliklar ?",
                from: "Alisher",
                time: "11:10"
            }

        ]

    },
    {
        name: "Bekmurod",
        img: './img/chats/bekmurod.jpg',
        chats: [{
                message: "Assalomu alaykum",
                from: "You",
                time: "10:59"
            },
            {
                message: "Va alaykum assalom ahvolariz yaxshimi?",
                from: "Bekmurod",
                time: "11:00"
            }
        ]

    },
    {
        name: "Humoyun",
        img: './img/chats/avatar.jpg',
        chats: [{
                message: "Assalomu alaykum",
                from: "You",
                time: "10:20"
            },
            {
                message: "Va alaykum assalom ahvolariz yaxshimi?",
                from: "Humoyun",
                time: "10:21"
            },
            {
                message: "Alhamdulillah yaxshi ozilardachi ?",
                from: "You",
                time: "10:22"
            }

        ]

    },
    {
        name: "Brooooo",
        img: './img/chats/broo.jpg',
        chats: [{
                message: "Assalomu alaykum",
                from: "You",
                time: "10:00"
            },
            {
                message: "Va alaykum assalom shogird nima gap?",
                from: "Brooooo",
                time: "10:05"
            },
            {
                message: "Yuribmizu ozizchi teacher ?",
                from: "You",
                time: "10:06"
            }

        ]

    },
    {
        name: "Mirzo",
        img: './img/chats/mirzo.jpg',
        chats: [{
                message: "Qalesan",
                from: "You",
                time: "09:50"
            },
            {
                message: "Yaxshi ozinchi ?",
                from: "Mirzo",
                time: "09:51"
            },
            {
                message: `Boladi ! `,
                from: "You",
                time: "09:53"
            }

        ]

    },
    {
        name: "Nozim",
        img: './img/chats/nozim.jpg',
        chats: [{
                message: "Bugun bir futbol oynelikmi",
                from: "Nizom",
                time: "09:40"
            },
            {
                message: "Zor bolardi rasa zerikdigu",
                from: "You",
                time: "09:41"
            },
            {
                message: `Kechga xabarlasharmiz unda  `,
                from: "Nizom",
                time: "09:43"
            }

        ]

    },
    {
        name: "Jafar",
        img: './img/chats/zafar.jpg',
        chats: [{
                message: "Nima gaplar ?",
                from: "Jafar",
                time: "11:06"
            },
            {
                message: "Alhamdulillah tinchlik ozilardachi ?",
                from: "You",
                time: "11:09"
            },
            {
                message: "Yaxshi rahmat Allohga shukr oqishlar yaxshimi uydagilar hammasi yaxshimi nima yangiliklar ?",
                from: "Jafar",
                time: "11:10"
            }

        ]

    },
    {
        name: "Doniyorbek",
        img: './img/chats/user.jpg',
        chats: [{
                message: "Assalomu alaykum",
                from: "You",
                time: "10:59"
            },
            {
                message: "Va alaykum assalom ahvolariz yaxshimi?",
                from: "Doniyorbek",
                time: "11:00"
            }
        ]

    },
    {
        name: "Nodir",
        img: './img/chats/avatar.jpg',
        chats: [{
                message: "Assalomu alaykum",
                from: "You",
                time: "10:20"
            },
            {
                message: "Va alaykum assalom ahvolariz yaxshimi?",
                from: "Nodir",
                time: "10:21"
            },
            {
                message: "Alhamdulillah yaxshi ozilardachi ?",
                from: "You",
                time: "10:22"
            }

        ]

    }
]

function generateIntroPage(selector, callback) {
    selector.innerHTML = ''
    selector.innerHTML += `
    <div class="tg-container">
        <div class="tg-container-header">
            <div class="tg-container-header-left">
                <div class="tg-container-header-left-btn">
                    <div class="burger-button" id="burger-button">
                        <span class="burger-button-icon"></span>
                    </div>
                    <div class="text">
                        <p>Telegram</p>
                    </div>
                </div>
                <div class="navigation-menu">
                    <div class="list-item">
                        <img src="img/friends.png" alt=""> New group
                    </div>
                    <div class="list-item">
                        <img src="./img/contact.png" alt=""> Contacts
                    </div>
                    <div class="list-item">
                        <img src="./img/settings.png" alt=""> Settings
                    </div>
                    <div class="list-item">
                        <img src="./img/question.png" alt=""> Telegram FAQ
                    </div>
                    <div class="list-item">
                        <img src="./img/telegram (1).png" alt=""> About
                    </div>
                </div>
            </div>
            <div class="tg-container-header-right">
                
            </div>
        </div>
        <div class="tg-container-content">
            <div class="tg-container-content-main">
                <div class="tg-container-content-main-search">
                    <input class="search" type="text" id="search">
                    <label for="search">Search</label>
                    <img src="./img/loupe.png" alt="">
                </div>
                <div class="tg-container-content-main-masseger">
                </div>
            </div>
            <div class="tg-container-content-content">
                <!-- renderdan oldingi holat -->
                <div class="tg-container-content-content-message-window">
                    <p class="first">Please select a chat to start messaging</p>
                </div>
                <div class="tg-container-content-content-message-write">
                </div>
            </div>
        </div>
    </div>
    <div class="contact-info-wrapper"></div>
    `;
    callback()
}

function generateIntroPageFuncs() {

    function toggleMenu() {
        const burger = document.querySelector("#burger-button")
        const navigationMenu = document.querySelector(".tg-container .tg-container-header .tg-container-header-left .navigation-menu");
        const headerLeft = document.querySelector(".tg-container-header-left-btn")
        headerLeft.onclick = () => {
            navigationMenu.classList.toggle("visible")
            burger.classList.toggle("open");
        }
    }

    toggleMenu()

    function hasClass(element, testClass) {
        if ('classList' in element) {
            return element.classList.contains(testClass);
        } else { return new Regexp(testClass).exec(element.className); } // this is better

        //} else { return el.className.indexOf(testClass) != -1; } // this is faster but requires indexOf() polyfill
        return false;
    }

    function closeToggleMenu() {
        const burger = document.querySelector("#burger-button")
        const navigationMenu = document.querySelector(".tg-container .tg-container-header .tg-container-header-left .navigation-menu");
        document.querySelector(".tg-container-content").onclick = () => {
            if (hasClass(burger, "open")) {
                burger.classList.remove("open");
                navigationMenu.classList.remove('visible')
            }
        }

    }
    closeToggleMenu()



    function generateUsers() {
        const users = document.querySelector('.tg-container-content-main-masseger')
        users.innerHTML = ''
        data.forEach((user, id) => {
            users.innerHTML += `
                <div class="custom-card" id="${user.name}">
                    <input type="radio" name="card" id="${id}">
                    <label for=${id}>        
                        <div class="custom-card-img" id="${user.img}">
                            <img src="${user.img}" alt="">
                        </div>
                        <div class="custom-card-body">
                            <div class="custom-card-body-title">
                                <p class="title">${user.name}</p>
                                <span class="time">${user.chats[user.chats.length-1].time}</span>
                            </div>
                            <div class="custom-card-body-content">
                                <p>${user.chats[user.chats.length-1].from} : ${user.chats[user.chats.length-1].message}</p>
                                <span>${user.chats.length}</span>
                            </div>
                        </div>
                    </label>
                </div>
                `;
        })

    }
    generateUsers()


    function searchChats() {
        const customCards = document.querySelectorAll('.custom-card')
        const search = document.querySelector('input.search')
        search.addEventListener("input", () => {
            customCards.forEach((customCard) => {
                if (customCard.id.toString().toLowerCase().indexOf(search.value.toString().toLowerCase()) * 1 < 0) {
                    customCard.style.display = "none";
                } else {
                    customCard.style.display = "block";
                }
            })
        })

    }
    searchChats()




    function generateRight() {
        const tgContainerHeaderRight = document.querySelector(".tg-container-header-right");
        const messageWrite = document.querySelector('.tg-container-content-content-message-write')
        const customCards = document.querySelectorAll('.custom-card')
        customCards.forEach(customCard => {
            customCard.onclick = () => {
                const cardImg = customCard.querySelector('.custom-card-img')
                tgContainerHeaderRight.innerHTML = '';
                tgContainerHeaderRight.innerHTML += `
                <div class="tg-container-header-right-toolbar-title">
                    <p data-img="${cardImg.id}" data-name="${customCard.id}">${customCard.id}</p>
                </div>
                <div class="tg-container-header-right-controller">
                    <div><label for="search"><img src="./img/search.png" style="width: 20px;"></label></div>
                    <div><img src="./img/more (2).png" style="width: 20px;" alt=""></div>
                </div>
                `;
                messageWrite.innerHTML = ''
                messageWrite.innerHTML +=
                    `
                    <div class="message-wrapper">
                        <div class="message-wrapper-from">
                            <img width="40px" src="./img/chats/account.jpg" alt="">
                        </div>
                        <div class="message-wrapper-textarea">
                            <textarea placeholder="Write a message..."></textarea>
                        </div>
                        <div class="message-wrapper-to">
                            <img width="40px" src="${cardImg.id}" alt="">
                        </div>
                    </div>
                    <div class="message-navigator">
                        <div class="forchat">
                            <img src="./img/blank-page.png" alt="">
                        </div>
                        <div class="formedia">
                            <img src="./img/camera.png" alt="">
                        </div>
                        <div class="foraudio">
                            <img src="./img/microphone.png" alt="">
                        </div>
                        <div class="forsticer">
                            <img src="./img/happy.png" alt="">
                            <img src="./img/happy1.png" alt="">
                            <img src="./img/grinning.png" alt="">
                            <img src="./img/good-mood.png" alt="">
                        </div>
                        <div class="forbtn">
                            <button class="sendBtn" id="${customCard.id}">Send</button>
                        </div>
                    <div>
                    `;
                clickEnter()

                generateMessage(customCard.id)
                clickSendBtn()
                generateUserInfo()
            }
        })

    }
    generateRight()

    function generateMessage(arg) {
        const messageWindow = document.querySelector('.tg-container-content-content-message-window')
        messageWindow.innerHTML = ''
        data.forEach(item => {
            if (item.name == arg) {
                item.chats.forEach(chat => {
                    if (chat.from == 'You') {
                        messageWindow.innerHTML += `
                        <div class="arxive-message">
                            <div class="messager-img">
                                <img src="./img/chats/account.jpg" alt="">
                            </div>
                            <div class="arxive-message-message">
                                <div class="messager-name">
                                    <p>${chat.from}</p>
                                    <span>${chat.time}</span>
                                </div>
                                <div class="arxive-message-message-text">
                                    <p>${chat.message}</p>
                                </div>
                            </div>
                        </div>
                        `
                    } else {
                        messageWindow.innerHTML += `
                        <div class="arxive-message">
                            <div class="messager-img">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="arxive-message-message">
                                <div class="messager-name">
                                    <p>${chat.from}</p>
                                    <span>${chat.time}</span>
                                </div>
                                <div class="arxive-message-message-text">
                                    <p>${chat.message}</p>
                                </div>
                            </div>
                        </div>
                        `
                    }
                })
            }
        })
        updateScroll()
    }

    function clickSendBtn() {
        const btn = document.querySelector(".sendBtn")
        btn.onclick = sendBtn
    }

    function updateScroll() {
        let element = document.querySelector('.tg-container-content-content-message-window');
        let elementHeight = element.scrollHeight;
        element.scrollTop = elementHeight
    }

    function clickEnter() {
        const textarea = document.querySelector('textarea')
        textarea.addEventListener("keydown", function(event) {
            if (event.code == 'Enter') {
                event.preventDefault()
                sendBtn()
            }

        });

    }

    function sendBtn() {
        const customCards = document.querySelectorAll('.custom-card')
        const textarea = document.querySelector('textarea')
        const btn = document.querySelector(".sendBtn")
        const newObj = {}
        let q = new Date()
        data.forEach(item => {
            if (textarea.value !== "") {
                if (item.name === btn.id) {
                    newObj.message = textarea.value;
                    newObj.from = "You";
                    newObj.time = `${q.getHours()}:${q.getMinutes()}`
                    item.chats.push(newObj)
                }
            }

        })
        customCards.forEach(customCard => {
            if (textarea.value !== "") {
                if (customCard.id == btn.id) {
                    customCard.querySelector(".time").innerHTML = newObj.time;
                    customCard.querySelector(".custom-card-body-content p").innerHTML = `You : ${textarea.value}`;
                    customCard.querySelector(".custom-card-body-content span").textContent = customCard.querySelector(".custom-card-body-content span").textContent * 1 + 1
                }
            }
        })
        textarea.value = '';
        generateMessage(btn.id)
    }

    function generateUserInfo() {
        const rightHeader = document.querySelector('.tg-container-header-right-toolbar-title')
        rightHeader.onclick = () => {
            const user = rightHeader.querySelector('p')
            const contactInfo = document.querySelector(".contact-info-wrapper")
            contactInfo.classList.add('absolute')
            contactInfo.innerHTML = ''
            contactInfo.innerHTML += `
            <div class="contact-info-overlay">
                <div class="contact-info">
                    <div class="contact-info-header">
                        <div class="contact-info-title">
                            <p>Contact Info</p>
                            <div class="contact-info-title-action">
                                <p>Edit</p>
                                <p>Close</p>
                            </div>
                        </div>
                        <div class="contact-info-user">
                            <div class="contact-info-user-img-wrapper">
                                <img class="contact-info-user-img" data-img="${user.dataset.img}" src="${user.dataset.img}" alt="User">
                            </div>
                            <div class="contact-info-user-body">
                                <p>${user.dataset.name}</p>
                                <p>last seen recently</p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-info-body">
                        <div class="phone-number">
                            <img src="./img/2x/baseline_call_black_18dp.png" alt="qomadi">
                            <div>
                                <p>+998991002127</p>
                                <span>Phone</span>
                            </div>
                        </div>
                        <div class="notification">
                            <img src="./img/2x/baseline_notifications_black_18dp.png" alt="qomadi">
                            <div>
                                <p>Notifications</p>
                            </div>
                        </div>
                        <div class="more">
                            <img src="./img/2x/baseline_menu_black_18dp.png" alt="hamburger">
                            <div>
                                <p>Share Contact</p>
                                <p>More ...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-message">
                    <img src="./img/2x/baseline_chat_bubble_black_18dp.png" alt="">
                </div>
                <div class="contact-info-close">
                    <img src="./img/close-24px.svg" alt="">
                </div>
            </div>
            `;
            seeImg()
            closeContactInfo()
        }


    }

    function seeImg() {
        const window = document.querySelector('.contact-info-overlay')
        const imgDiv = document.querySelector('.contact-info-user-img-wrapper')
        const img = imgDiv.querySelector("img")
        imgDiv.onclick = () => {
            window.innerHTML += `
                <div class="full-screen-img">
                    <img src="${img.dataset.img}">
                </div>
            `
            clickWindow()
            closeContactInfo()
        }

    }

    function clickWindow() {
        const fullScreen = document.querySelector(".full-screen-img")
        fullScreen.onclick = () => {
            console.log('qomadi');
            fullScreen.style.display = "none"
        };
    }

    function closeContactInfo() {
        const closeBtn = document.querySelector(".contact-info-close")
        closeBtn.onclick = () => {
            const contactInfo = document.querySelector(".contact-info-wrapper")
            contactInfo.classList.remove('absolute')
        }
    }

}

generateIntroPage(root, generateIntroPageFuncs)