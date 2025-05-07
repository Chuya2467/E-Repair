
            //Creating 3 variables with price
            let screen = +0.00;
            let backGlass = +0.00;
            let motherboard = +0.00;

            const model = parseInt(sessionStorage.getItem("model"));
            

            //Default switch, if choosing model - price will change
                switch(model)
                {
                    case 11:
                        screen = 120.00;
                        backGlass = 70.00;
                        motherboard = 200.00;
                        break;
                    case 12:
                        screen = 147.00;
                        backGlass = 97.00;
                        motherboard = 227.00;
                        break;
                    case 13:
                        screen = 174.00;
                        backGlass = 124.00;
                        motherboard = 254.00;
                        break;
                    case 14:
                        screen = 201.00;
                        backGlass = 151.00;
                        motherboard = 281.00;
                        break;
                    case 15:
                        screen = 228.00;
                        backGlass = 178.00;
                        motherboard = 308.00;
                        break;
                    case 16:
                        screen = 255.00;
                        backGlass = 205.00;
                        motherboard = 335.00;
                        break;
                }


                //after click price will be saved
            document.getElementsByClassName("model")[0].addEventListener("click", savePrice1);

            document.getElementsByClassName("model")[1].addEventListener("click", savePrice2);

            document.getElementsByClassName("model")[2].addEventListener("click", savePrice3);


            //3 funktions that will save the price
            function savePrice1()
            {
                sessionStorage.setItem("service", "Screen");
                sessionStorage.setItem("price", screen);
            }

            function savePrice2()
            {
                sessionStorage.setItem("service", "Back Glass");
                sessionStorage.setItem("price", backGlass);
            }

            function savePrice3()
            {
                sessionStorage.setItem("service", "Motherboard");
                sessionStorage.setItem("price", motherboard);
            }
            //Price + euro sign
            document.getElementsByClassName("price")[0].textContent = screen + "\u20AC";
            document.getElementsByClassName("price")[1].textContent = backGlass + "\u20AC";
            document.getElementsByClassName("price")[2].textContent = motherboard + "\u20AC";
            