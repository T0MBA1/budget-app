<template>
  <div class="content">
    <BaseBlock title="Add Account">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="name" class="form-control" placeholder="Your Name" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Account Type</label
        >
        <input
          type="name"
          class="form-control"
          placeholder="Type Your Account"
        />
      </div>
      <div class="dropdown mb-3">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Is Paylater
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item">Yes</a></li>
          <li><a class="dropdown-item">No</a></li>
        </ul>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Account Limit</label
        >
        <input type="number" class="form-control" placeholder="Rp." />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Komentar</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </BaseBlock>
  </div>
</template>
