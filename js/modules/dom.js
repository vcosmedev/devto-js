const createNavbar = (isLogged) => {
  let navHtml = `<nav class="navbar p-0 px-3 bg-white nav__container">
    <div class="container-xl p-0 justify-content-between flex-nowrap">
        <div class="d-flex">
        ${
          isLogged
            ? `<div class="d-flex">
            <a href="views/create.html" class="text-decoration-none">
                <button class="btn btn-outline-primary d-none d-md-block">
                Create Post
                </button>
            </a>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6"
            class="crayons-icon d-md-none my-auto"
            >
                <title id="agtkixkainaiofuhj4o3hunp3uvwl1y6">Search</title>
                <path
                d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
                ></path>
            </svg>

        <a href="#" class="navbar-nav mx-3 my-auto">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            aria-labelledby="a4gcjtvbhvh6eh4ee8qmpi1l37goznso"
            class="crayons-icon"
            >
            <title id="a4gcjtvbhvh6eh4ee8qmpi1l37goznso">
                Notifications
            </title>
            <path
                d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"
            ></path>
            </svg>
        </a>
        <img
            id="author-picture"
            alt=""
            class="navbar-nav rounded-circle me-1"
            height="40"
        />
        </div>`
            : `<button
    class="navbar-toggler mx-md-1 me-2 border-0 d-md-none px-0"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasNavbar"
    aria-controls="offcanvasNavbar"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <a class="navbar-brand" href="#">
    <img
      src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
      alt=""
      height="40"
    />
  </a>

  <div class="d-none d-md-block m-auto nav__form__container">
    <form class="d-flex form__search" role="search">
      <div class="input-group">
        <input
          id="search-input"
          type="text"
          class="form-control border-end-0"
          placeholder="Search..."
          aria-label="Buscar"
          aria-describedby="basic-addon1"
        />
        <button class="border-0 bg-white p-0 search__button">
          <span
            class="bg-white border-1 border-start-0 rounded-0 rounded-end input-group-text search__hover"
            id="basic-addon1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6"
              class="crayons-icon"
            >
              <title id="agtkixkainaiofuhj4o3hunp3uvwl1y6">
                Search
              </title>
              <path
                d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </form>
  </div>
</div>
<div class="d-flex gap-3" id="authentication-top-nav-actions">
  <span class="hidden m:block">
    <a
      href="/enter"
      class="c-link c-link--block mr-2 whitespace-nowrap ml-auto"
      data-no-instant=""
    >
      <button class="btn btn-outline-primary d-none d-md-block login-button">
        Log in
      </button>
    </a>
  </span>

  <a
    href="/enter?state=new-user"
    data-tracking-id="ca_top_nav"
    data-tracking-source="top_navbar"
    class="c-cta c-cta--branded whitespace-nowrap mr-2"
    data-no-instant=""
  >
    <button class="btn btn-outline-primary d-none d-md-block">
      Create Account
    </button>
  </a>
</div>`
        }
        </div>
    </div>
</nav>`;
  return navHtml;
};

export { createNavbar };
