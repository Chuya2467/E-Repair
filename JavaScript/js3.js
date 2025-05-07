            //const model = parseInt(sessionStorage.getItem("model"));
            //const price = parseDouble(sessionStorage.getItem("price"));
            //const service = sessionStorage.getItem("service");

            document.getElementById("finalModel").textContent =  "Model: Iphone " + sessionStorage.getItem("model");
            document.getElementById("serviceName").textContent =  "Servise: " + sessionStorage.getItem("service");
            document.getElementById("finalPrice").textContent =  "Total cost: " + sessionStorage.getItem("price") + ".00";