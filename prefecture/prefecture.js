window.addEventListener('load', () => {
    const prefectureInfo = {
        "北海道": "https://thumb.ac-illust.com/f8/f8f304c91778973f413d2b68ce381ed4_t.jpeg",
        "青森県": "https://media.istockphoto.com/illustrations/map-of-aomori-prefecture-illustration-id844637834?k=20&m=844637834&s=612x612&w=0&h=sJbj2WAghQAey5Jy1WKgaz2ZRzWugYtF00qnV88j9S4=",
        "岩手県": "https://t11.pimg.jp/033/472/031/1/33472031.jpg",
        "宮城県": "https://t11.pimg.jp/033/472/031/1/33472031.jpg",
        "秋田県": "https://t15.pimg.jp/033/472/295/1/33472295.jpg",
        "山形県": "https://t17.pimg.jp/033/472/037/1/33472037.jpg",
        "福島県": "https://t10.pimg.jp/033/472/140/1/33472140.jpg",
        "茨城県": "https://t19.pimg.jp/037/086/109/1/37086109.jpg",
        "栃木県": "https://t14.pimg.jp/037/086/324/1/37086324.jpg",
        "群馬県": "https://t19.pimg.jp/033/472/039/1/33472039.jpg",
        "埼玉県": "https://t19.pimg.jp/037/086/259/1/37086259.jpg",
        "千葉県": "https://t13.pimg.jp/033/472/033/1/33472033.jpg",
        "東京都": "https://t16.pimg.jp/037/086/326/1/37086326.jpg",
        "神奈川県": "https://t16.pimg.jp/033/472/146/1/33472146.jpg",
        "新潟県": "https://t13.pimg.jp/037/086/253/1/37086253.jpg",
        "富山県": "https://t14.pimg.jp/050/009/384/1/50009384.jpg",
        "石川県": "https://t10.pimg.jp/037/086/110/1/37086110.jpg",
        "福井県": "https://t15.pimg.jp/033/472/035/1/33472035.jpg",
        "山梨県": "https://t12.pimg.jp/037/086/332/1/37086332.jpg",
        "長野県": "https://t19.pimg.jp/033/472/189/1/33472189.jpg",
        "岐阜県": "https://t18.pimg.jp/033/472/038/1/33472038.jpg",
        "静岡県": "https://t17.pimg.jp/033/472/287/1/33472287.jpg",
        "愛知県": "https://t19.pimg.jp/037/086/079/1/37086079.jpg",
        "三重県": "https://t11.pimg.jp/037/086/191/1/37086191.jpg",
        "滋賀県": "https://t19.pimg.jp/033/472/239/1/33472239.jpg",
        "京都府": "https://t15.pimg.jp/037/086/185/1/37086185.jpg",
        "大阪府": "https://t17.pimg.jp/037/086/257/1/37086257.jpg",
        "兵庫県": "https://t19.pimg.jp/033/472/139/1/33472139.jpg",
        "奈良県": "https://t11.pimg.jp/033/472/191/1/33472191.jpg",
        "和歌山県": "https://t13.pimg.jp/033/472/293/1/33472293.jpg",
        "鳥取県": "https://t17.pimg.jp/037/086/327/1/37086327.jpg",
        "島根県": "https://t11.pimg.jp/033/472/241/1/33472241.jpg",
        "岡山県": "https://t15.pimg.jp/037/086/255/1/37086255.jpg",
        "広島県": "https://t17.pimg.jp/033/472/137/1/33472137.jpg",
        "山口県": "https://t17.pimg.jp/033/472/297/1/33472297.jpg",
        "徳島県": "https://t15.pimg.jp/037/086/325/1/37086325.jpg",
        "香川県": "https://t12.pimg.jp/037/086/112/1/37086112.jpg",
        "愛媛県": "https://t17.pimg.jp/033/491/007/1/33491007.jpg",
        "高知県": "https://t17.pimg.jp/037/086/177/1/37086177.jpg",
        "福岡県": "https://t15.pimg.jp/037/086/085/1/37086085.jpg",
        "佐賀県": "https://t17.pimg.jp/033/472/237/1/33472237.jpg",
        "長崎県": "https://t12.pimg.jp/037/086/202/1/37086202.jpg",
        "熊本県": "https://t13.pimg.jp/037/086/183/1/37086183.jpg",
        "大分県": "https://t14.pimg.jp/037/086/254/1/37086254.jpg",
        "宮崎県": "https://t18.pimg.jp/033/472/188/1/33472188.jpg",
        "鹿児島県": "https://t14.pimg.jp/033/472/144/1/33472144.jpg",
        "沖縄県": "https://t11.pimg.jp/048/380/521/1/48380521.jpg"
    }
    class Prefecture {
        constructor(jsonFile, numberOfCorrectAnswers) {
            this.jsonFile = jsonFile;
            this.numberOfCorrectAnswers = numberOfCorrectAnswers;
        }
        question() {
            const x = this.PrefectureJSON()[this.Prefecureromdom()];
            console.log(x);//あとで消す
            const img = this.GetImgTag();
            console.log(img);//あとで消す
            img.src = x[1];
            img.value = x[0];
        }
        PrefectureJSON() {
            return Object.entries(this.jsonFile);
        }
        Prefecureromdom() {
            return Math.floor(Math.random() * 48);//47 + 1(小数点だから多くかけなければならない)で範囲のの決定
        }
        GetImgTag() {
            return document.getElementById("prefectureImg");
        }

        checkTheAnswer() {
            const img = this.GetImgTag();
            const answer = img.value;
            const userAnswer = this.UserAnswer();
            console.log(answer);//あとで消す
            console.log(userAnswer);//あとで消す
            if (answer == userAnswer) {
                alert("congratulations");
                this.numberOfCorrectAnswers++;
                console.log(this.numberOfCorrectAnswers);
            } else {
                alert("let's do your best next time");//英語で次頑張ろうらしいです。
            }
        }
        UserAnswer() {
            return document.getElementById("userAnswer").value;
        }

        nextQusetion(e) {
            if (e.cancelable) {//そもそもキャンセルできるか？
                e.preventDefault();// デフォルトの挙動をキャンセル
                this.question();
            } else {
                this.question();
            }
        }
    }

    const game = new Prefecture(prefectureInfo, 0);
    game.question();

    const dicision = document.getElementById("dicision");
    dicision.addEventListener('click', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            dicision.addEventListener('click', game.checkTheAnswer(), false);
        } else {
            dicision.addEventListener('click', game.checkTheAnswer(), false);
        }
    })

    document.getElementById("next").addEventListener('click', (e) => {
        game.nextQusetion(e);
    }, false);
})










