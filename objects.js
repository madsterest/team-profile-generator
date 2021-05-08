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
      <title>Document</title>
    </head>
    <body>
      <nav class="navbar text-white bg-danger mb-4">
        <div class="container-fluid justify-content-center p-4">
          <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row mx-4 row-cols-1 row-cols-md-2 row-cols-lg-3"></div>
             ${generateCards(array)}
      </div>
    </body>
  </html>`;
}
testArray = [{ name: "Dave", id: "50", email: "dave@example.com" }];
function generateCards(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].officeNumber) {
      renderManagerCard(array[i]);
    } else if (array[i].github) {
      renderEngineerCard(array[i]);
    } else if (array[i].school) {
      renderInternCard(array[i]);
    } else {
      renderEmployeeCard(array[i]);
    }
  }
}

function renderEmployeeCard(array) {
  return `<div class="col">
  <div class="card mb-3">
    <div class="card-header text-white bg-primary">${array.name}: Employee</div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${array.id}</li>
        <li class="list-group-item">${array.email}</li>
      </ul>
    </div>
  </div>
</div>`;
}
function renderManagerCard(array) {
  return `<div class="col">
  <div class="card mb-3">
    <div class="card-header text-white bg-primary">${array.name}: Manager</div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${array.id}</li>
        <li class="list-group-item">${array.email}</li>
        <li class="list-group-item">${array.officeNumber}</li>
      </ul>
    </div>
  </div>
</div>`;
}
function renderEngineerCard(array) {
  return `<div class="col">
  <div class="card mb-3">
    <div class="card-header text-white bg-primary">${array.name}: Engineer</div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${array.id}</li>
        <li class="list-group-item">${array.email}</li>
        <li class="list-group-item">${array.github}</li>
      </ul>
    </div>
  </div>
</div>`;
}
function renderInternCard(array) {
  return `<div class="col">
  <div class="card mb-3">
    <div class="card-header text-white bg-primary">${array.name}: Intern</div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${array.id}</li>
        <li class="list-group-item">${array.email}</li>
        <li class="list-group-item">${array.school}</li>
      </ul>
    </div>
  </div>
</div>`;
}
