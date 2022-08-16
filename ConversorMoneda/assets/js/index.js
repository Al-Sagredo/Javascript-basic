const input = document.querySelector("input")
        const select = document.querySelector("select")
        const btn = document.querySelector("button")
        const chartDOM = document.getElementById("myChart");
        const resultado = document.querySelector("span")
        let primeraVez = true

        btn.addEventListener("click", async function () {
            //para poder destruir el objeto canvas tiene que haber sido creado primero
            if (!primeraVez) destroy()
            primeraVez = false
            const url = "https://mindicador.cl/api/" + select.value.toLowerCase()
            try {
                const res = await fetch(url)
                const indicador = await res.json()
                const serie = indicador.serie //crea un array con el atributo "serie" del objeto, que es el que contiene los valores por fecha
                const serie10 = serie.filter(elemento => serie.indexOf(elemento) < 10) //reduce el array anterior a 10 elementos
                config = setConfig(serie10)
                chart = new Chart(chartDOM, config)
            } catch (e) {
                document.querySelector("body").innerHTML = e.message
            }
        })

        function destroy() {
            chart.destroy()
        }

        function setConfig(indicadorValores) {
            const fechas = indicadorValores.map(ele => ele.fecha.slice(0, 10)) //extrae las fechas
            fechas.sort()
            const valores = indicadorValores.map(ele => ele.valor.toString().split(".")[0]) //extrae los valores de cada fecha
            resultado.innerHTML = (input.value / valores[0]).toFixed(2)
            const config = {
                type: "line",
                data: {
                    labels: fechas,
                    datasets: [{
                        label: "Historial últimos 10 días",
                        backgroundColor: "red",
                        data: valores
                    }]
                }
            }
            return config
        }