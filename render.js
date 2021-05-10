module.exports.renderHtml = renderHtml;

function renderHtml(array) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <script src="https://kit.fontawesome.com/dcd16aee2a.js" crossorigin="anonymous"></script>
      <title>Document</title>
    </head>
    <body>
      <nav class="navbar text-white bg-danger mb-4">
        <div class="container-fluid justify-content-center p-4">
          <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
      </nav>
      <div class="container">
        <div class="row justify-content-center mx-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
        ${generateCards(array)}
        </div>  
      </div>
    </body>
  </html>`;
}
let render = [];
function generateCards(array) {
  for (var i = 0; i < array.length; i++) {
    let object = array[i];
    if (object.officeNumber) {
      render.push(renderManagerCard(object));
    } else if (object.github) {
      render.push(renderEngineerCard(object));
    } else if (object.school) {
      render.push(renderInternCard(object));
    } else {
      render.push(renderEmployeeCard(object));
    }
  }
  return render.join("");
}

function renderEmployeeCard(array) {
  return `
        <div class="col">
        <div class="card mb-3">
          <div class="card-header text-white bg-primary">${array.name} <br><i class="fas fa-coffee"></i> Employee</div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${array.id}</li>
              <li class="list-group-item">Email: <a href="mailto: ${array.email}">${array.email}</a></li>
            </ul>
          </div>
        </div>
      </div>`;
}
function renderManagerCard(array) {
  return `
        <div class="col">
        <div class="card mb-3">
          <div class="card-header text-white bg-primary">${array.name}<br><i class="fas fa-briefcase"></i> Manager</div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${array.id}</li>
              <li class="list-group-item">Email: <a href="mailto: ${array.email}">${array.email}</a></li>
              <li class="list-group-item">Office Number: ${array.officeNumber}</li>
            </ul>
          </div>
        </div>
      </div>`;
}
function renderEngineerCard(array) {
  return `
        <div class="col">
        <div class="card mb-3">
          <div class="card-header text-white bg-primary">${array.name}<br><i class="fas fa-glasses"></i> Engineer</div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${array.id}</li>
              <li class="list-group-item">Email: <a href="mailto: ${array.email}">${array.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${array.github}">${array.github}</a></li>
            </ul>
          </div>
        </div>
      </div>`;
}

function renderInternCard(array) {
  return `
        <div class="col">
        <div class="card mb-3">
          <div class="card-header text-white bg-primary">${array.name}<br><i class="fas fa-graduation-cap"></i> Intern</div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${array.id}</li>
              <li class="list-group-item">Email: <a href="mailto: ${array.email}">${array.email}</a></li>
              <li class="list-group-item">School: ${array.school}</li>
            </ul>
          </div>
        </div>
      </div>`;
}
