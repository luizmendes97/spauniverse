const routes = {
  "/": "./pages/home.html", // home route
  "/universe": "./pages/universe.html", // universe route
  "/exploration": "./pages/exploration.html", // exploration route
  404: "./pages/404.html", // 404 route
}

function changeBackground() {
  let obj=document.getElementById("bg-image");
  if(obj.className=="bg-universe") {
    obj.className="bg-home";   
  } else {
    obj.className="bg-universe";
  }

function route(event) {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const { pathname } = window.location

  const currentRoute = routes[pathname] || routes[404]

  fetch(currentRoute)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector("#app").innerHTML = html
    })
}

handle()

window.onpopstate = () => handle()
