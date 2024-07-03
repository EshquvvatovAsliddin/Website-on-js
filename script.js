let body = document.body;

body.innerHTML = `
    <style>
        body{
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            padding-bottom: 600px;
        }
        header{
            border-bottom:1px solid black;
            padding: 10px;
            display: flex;
            align-items: center;
            nav{
                display: flex;
                width: 100%;
                justify-content: space-around;
                align-items: center;

                ul{
                    display: flex;
                    list-style:none;
                    gap:30px;
                    a{
                        &:hover{
                            border-bottom: 2.5px solid black;
                        }
                    }
                    
                }
                div{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    input{
                        width: 243px;
                        height: 38px;
                        padding-left: 10px;
                    }
                    img:nth-child(2){
                        position: relative;
                        margin-left: -40px;
                    }
                    img:nth-child(3){
                        width: 65px;
                        margin-left: 20px;
                    }
                }
            }
        }
        main{
            padding-bottom: 120px !important;
            .hero{
                display: flex;
                justify-content: center;
                padding-top: 50px;
                align-items: center;
                gap: 110px;
                .deta{
                    div{
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        h4{
                            margin-top: -12px;
                        }
                        .men{
                            margin-right: 25px;
                        }
                    }
                    h3{
                        font-size: 16px;                    
                    }
                    .h3w{
                        margin-top: -11px;
                    }
                }
                img{
                    border-left: 1px solid;
                    padding-left: 100px;
                    margin-top: -50px;
                    padding-top: 50px;
                }
            }
            .bro{
                border-bottom: 1px solid;
                padding-bottom: 100px;
                
                .imgbg{
                    width:1200px;
                    transform: translateY(80px);
                    position: absolute;
                    right: 0;
                }
                .btninfo{
                    background-color: red;
                    margin-top: 640px;
                    margin-left: 42%;
                    height:56px;
                    border:none;
                    color: white;
                    width: 234px;
                }
            }
        }
    </style>
    <header>
        <nav>
            <h1>Exclusive</h1>
            <ul>
                <li><a href="#" style="text-decoration:none; color:black;" >Home</a></li>
                <li><a href="#" style="text-decoration:none; color:black;" >Contact</a></li>
                <li><a href="#" style="text-decoration:none; color:black;" >About</a></li>
                <li><a href="#" style="text-decoration:none; color:black;" >Sign Up</a></li>
            </ul>
            <div style="display: flex;">
                <input type="text" placeholder="What are you looking for?">
                <img src="./assets/images/Component 2.png">
                <img src="./assets/images/Frame 551.png">
            </div>
        </nav>
    </header>
    <main>
        <div class="hero">
            <div class="deta">
                <div>
                    <h4>Woman’s Fashion</h4>
                    <h4>></h4>
                </div>
                <div>
                    <h4 class="men">men's Fashion</h4>
                    <h4>></h4>
                </div>
                <h3 class="h3w">Electronics</h3>
                <h3>Home & Lifestyle</h3>
                <h3>Medicine</h3>
                <h3>Sports & Outdoor</h3>
                <h3>Baby’s & Toys</h3>
                <h3>Groceries & Pets</h3>
                <h3>Health & Beauty</h3>
            </div>
            <div class="bgimages">
                <img src="./assets/images/Frame 560.png">
            </div>
        </div>
        <div class="bro">
            <img src="./assets/images/Frame 728.png" class="imgbg">

            <button class="btninfo">View All Productsasd</button>
        </div>
    </main>
`;