<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex items-center justify-between my-8">
    <h2
      class="my-6 text-sm text-gray-700 md:text-xl fmont-semibold md dark:text-grey-200"
    >
      Product List ({{ products.total }})
    </h2>

    <div class="flex justify-center flex-1 lgmr-32">
      <div
        class="relative w-full max-w-xl ml-4 mr-6 focus-within:text-gray-500"
      >
        <div class="absolute inset-y-0 flex items-center pl-2">
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <form>
          <input
            v-model="keyword"
            class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-200 border-0 rounded-md"
            type="text"
            placeholder="ป้อนชื่อสินค้าที่ต้องการค้นหา"
            aria-label="Search"
          />
          <button @click="submitSearchForm" type="submit" class="hidden">
            Submit
          </button>
        </form>
      </div>

      <div>
        <button
          @click="submitSearchForm"
          class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span>ค้นหา</span>
        </button>
      </div>

      <div>
        <button
          @click="resetSearchForm"
          class="flex items-center justify-between px-4 py-1.5 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-700 focus:outline-none focus:shadow-outline-purple"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>ล้าง</span>
        </button>
      </div>
    </div>

    <button
      @click="openModalAddProduct"
      class="flex items-center justify-between px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-500 border border-transparent rounded-lg active:bg-purple-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple"
    >
      <svg
        class="w-4 h-4 mr-2 -ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
      <span>เพิ่ม</span>
    </button>
  </div>
  <!-- ตารางแสดงสินค้า -->
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border"
          >
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">Product</th>
            <th class="px-4 py-3">Price</th>
            <th class="px-4 py-3">By</th>
            <th class="px-4 py-3">Manage</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr
            v-for="product in products.data"
            :key="product.id"
            class="text-gray-700 dark:text-gray-400 hover:bg-blue-100"
          >
            <td class="px-4 py-3 text-sm">{{ product.id }}</td>
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                  <img
                    class="object-cover w-full h-full rounded-full"
                    :src="product.image"
                    alt=""
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 rounded-full shadow-inner"
                    aria-hidden="true"
                  ></div>
                </div>
                <div>
                  <p class="font-semibold">{{ product.name }}</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    {{ product.created_at }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm">{{ product.price }}</td>
            <td class="px-4 py-3 text-sm">
              <div class="flex items-center text-sm">
                <div class="relative hidden w=8 h-8 mr-3 rounded-full md:block">
                  <img
                    class="object-cover w-full h-full rounded-full"
                    src=""
                    alt=""
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 shadow-inner rounded_full"
                    aria-hidden="true"
                  ></div>
                </div>
                <div>
                  <p class="font-semibold">user_fullname</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    Update {{ product.updated_at }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm">
              <button
                @click="openModalEditProduct(product.id)"
                class="px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-yellow-400 border border-transparent rounded-lg active:bg-purple-600 hover:bg-yellow-500 focus:outline-none focus:shadow-outline-purple"
              >
                <svg
                  class="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button
                @click="onclickDelete(product.id)"
                class="px-4 py-2 mx-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
              >
                <svg
                  class="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- แสดงผลตัวแบ่งหน้า page -->
      <VueTailwindPagination
        :current="currentPage"
        :total="total"
        :per-page="perPage"
        @page-changed="onPageClick($event)"
      />
    </div>
  </div>

  <!-- Popup สำหรับเพิ่มรายการสินค้าใหม่ -->
  <div
    v-if="showAddModal"
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full modal"
  >
    <div
      class="z-50 w-11/12 p-5 mx-auto overflow-y-auto bg-white rounded shadow-lg h-4/5 modal-container md:max-w-md"
    >
      <!-- Header -->
      <div class="flex items-center justify-center w-full h-auto">
        <div
          class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold"
        >
          เพิ่มสินค้าใหม่
        </div>
        <div
          @click="closeAddProduct"
          class="flex items-center justify-center w-1/12 h-auto cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <!-- Header End -->
      </div>

      <!-- Modal Content -->
      <div class="w-full h-auto mb-4">
        <form
          ref="addProductForm"
          @submit.prevent="onSubmit"
          enctype="multipart/form-data"
        >
          <label class="block my-3 text-gray-700 text-md" for="name"
            >ชื่อสินค้า</label
          >
          <input
            v-model="name"
            type="text"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            placeholder="Product name"
          />
          <div v-if="v$.name.$error" class="mt-2 text-sm text-red-500">
            {{ v$.name.$errors[0].$message }}
          </div>

          <label class="block my-3 text-gray-700 text-md" for="slug"
            >สลัก</label
          >
          <input
            v-model="slug"
            type="text"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            placeholder="Product-name"
          />
          <div v-if="v$.slug.$error" class="mt-2 text-sm text-red-500">
            {{ v$.slug.$errors[0].$message }}
          </div>

          <label class="block my-3 text-gray-700 text-md" for="description"
            >รายละเอียด</label
          >
          <textarea
            v-model="description"
            type="text"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            rows="5"
            placeholder="Product description"
          ></textarea>

          <label class="block my-3 text-gray-700 text-md" for="name"
            >ราคา</label
          >
          <input
            v-model="price"
            type="text"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
            placeholder="0.00"
          />
          <div v-if="v$.price.$error" class="mt-2 text-sm text-red-500">
            {{ v$.price.$errors[0].$message }}
          </div>

          <div class="mt-4">
            <img v-if="imgUrl" :src="imgUrl" class="w-full" />
          </div>

          <label class="block my-3 text-gray-700 text-md" for="name"
            >ภาพสินค้า</label
          >
          <input
            ref="fileupload"
            @change="onFileChange"
            type="file"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
          />

          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2">
              <button
                @click="submitForm"
                class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
              >
                บันทึกรายการ
              </button>
            </div>

            <div>
              <button
                @click="onResetForm"
                class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-gray-500 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple"
              >
                ล้าง
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import Service
import http from "@/services/BackendService";
import "@ocrv/vue-tailwind-pagination/styles";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import useValidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  data() {
    return {
      /** ตัวแปรสำหรับเรียกใช้งาน Validation */
      v$: useValidate(),

      /** Read Product */
      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      /** ตัวแปรสำหรับเปิด / ปิด popup */
      showAddModal: false,

      /** ตัวแปรสำหรับผูกกับฟอร์มเพิ่มสินค้า */
      name: "",
      description: "",
      slug: "",
      price: "",
      imgSrc: "",
      fileName: "",
      imgUrl: "",
      file: null,
    };
  },

  components: {
    VueTailwindPagination,
  },

  methods: {
    /*
     * ส่วนของการอ่านข้อมูลจาก API และแสดงผลในตาราง
     */

    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api
    async getProducts(pageNumber) {
      let response = await http.get(`products?page=${pageNumber}`);
      let responseProduct = response.data;
      this.products = responseProduct;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
    },
    // สร้าง Function สำหรับการคลิกเปลี่ยนหน้า
    onPageClick(event) {
      this.currentPage = event;
      this.getProducts(this.currentPage);
    },

    /*
     * ส่วนของการเพิ่มสินค้าใหม่
     */

    // สร้างฟังก์ชันสำหรับ เปิด popup
    openModalAddProduct() {
      this.showAddModal = true;
    },

    // สร้างฟังก์ชันสำหรับ ปิด popup
    closeAddProduct() {
      this.showAddModal = false;
      this.onResetForm();
    },

    // สร้าง function เมื่อผู้ใช้มีการเลือกรูปภาพในช่องภาพสินค้า
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = e.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },

    // สร้าง function สำหรับ clear ข้อมูลในฟอร์มเพิ่มสินค้า
    onResetForm() {
      // การ clear ค่าทั้งหมดใน Form เราจะต้อง ref
      this.$refs.addProductForm.reset();
      this.name = "";
      this.slug = "";
      this.price = "";
      this.description = "";
      this.imgSrc = "";
      this.fileName = "";
      this.imgUrl = "";
      this.file = "";
      this.$refs.fileupload.value = null;
    },

    // สร้าง function การ validate เมื่อ submit form เพิ่มสินค้า
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // ถ้าไม่มี Error

        //alert("success");
        // ใช้ FormData ของ HTML 5 API ในการรับค่าจากฟอร์มที่มีการแนบไฟล์
        let data = new FormData();
        data.append("name", this.name);
        data.append("description", this.description);
        data.append("slug", this.slug);
        data.append("price", this.price);
        data.append("file", this.file);

        // console.log(data);
        // ส่งค่าไปยัง Laravel API Product Add
        http.post("products", data).then((response) => {
          console.log(response);
        });
      }
    },
  },

  validations() {
    return {
      name: {
        required: helpers.withMessage("ป้อนชื่อสินค้าก่อน", required),
      },
      slug: {
        required: helpers.withMessage("ป้อนสลักก่อน", required),
      },
      price: {
        required: helpers.withMessage("ป้อนราคาก่อน", required),
      },
    };
  },

  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    this.getProducts(this.currentPage);
  },
};
</script>