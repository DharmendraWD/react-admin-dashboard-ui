import React from 'react'

function CreateNew({ isCategoryHeader }) {
  return (
    <>
      <div class="content-wrapper" style={{ minHeight: "482.667px;" }}>
        <section class="content-header">
          <div class="container-fluid my-2">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Create Category</h1>
              </div>
              <div class="col-sm-6 text-right">
                <a href="categories.html" class="btn btn-primary">
                  Back
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
            <div class="card">
              <div class="card-body">
                <div class="row">

                  {isCategoryHeader === 1 && (
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="category">Category</label>
                        <select
                          name="category"
                          id="category"
                          className="form-control"
                        >
                          <option value="">Electronics</option>
                          <option value="">Mobile</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="name">Name</label>

                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="email">Slug</label>
                      <input
                        type="text"
                        name="slug"
                        id="slug"
                        class="form-control"
                        placeholder="Slug"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pb-5 pt-3">
              <button class="btn btn-primary">Create</button>
              <a href="brands.html" class="btn btn-outline-dark ml-3">
                Cancel
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CreateNew