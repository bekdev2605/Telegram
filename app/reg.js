function generateRegPage(selector, callback) {
    selector.innerHTMl = 'salom'
    selector.innerHTMl += `
            <div class="container">
                <div class="header"></div>
                <div class="content"></div>
            </div>
            <div class="modal-overlay">
                <div class="modal-text">
                    <div class="logo"><img src="./img/telegram (1).png" alt=""> Telegram</div>
                    <div class="text">
                        <p>Next </p>
                        <p class="p">&gt;</p>
                    </div>
                </div>
                <div class="reg">
                    <div class="navigator">
                        <button>Sign In</button>
                        <button>Log In</button>
                    </div>
                    <form action="">
                        <div>
                            <input type="text" id="name" required name="name">
                            <label for="name">Name</label>
                        </div>
                        <div>
                            <input type="email" required id="email" name="email">
                            <label for="email">Email</label>
                        </div>
                        <div>
                            <input type="text" id="login" required name="login">
                            <label for="login">Login</label>
                        </div>
                        <div>
                            <input type="password" required id="password" name="password">
                            <label for="password">Password</label>
                        </div>
                        <input type="submit" value="Ok" class="btn">
                    </form>
                </div>
            </div>

    `;
    callback()
}

function generateRegPageFuncs() {
    console.log('qomadi');
}

generateRegPage(root, generateRegPageFuncs)