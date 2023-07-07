const routes = {
  "/": "./pages/home.html", // home route
  "/universe": "./pages/universe.html", // universe route
  "/exploration": "./pages/exploration.html", // exploration route
  404: "./pages/404.html", // 404 route
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

function bgChange() {
  const getPathname = () => {
    const path = window.location.pathname
    return path.charAt(0) === "/" ? path.slice(1) : path
  }

  function changeBackground() {
    const body = document.body
    const path = getPathname()

    switch (path) {
      case "universe":
        body.style.backgroundImage = "url(./image/bg-universe.png)"
        break
      case "exploration":
        body.style.backgroundImage = "url(./image/bg-exploration.png)"
        break
      default:
        body.style.backgroundImage = "url(./image/bg-home.png)"
        break
    }
  }
  changeBackground()
}

bgChange()