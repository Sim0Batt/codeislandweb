<template>
  <div>
    <div class="input-title-container">
      <div class="horizontal-container">
        <img src="@/assets/it.png" alt="" class="flag" />
        <input
          type="text"
          v-model="this.titleIt"
          placeholder="project name"
          class="input-title"
          ref="titleItRef"
        />
      </div>
      <div class="horizontal-container">
        <img src="@/assets/uk.png" alt="" class="flag" />
        <input
          type="text"
          v-model="this.titleEn"
          placeholder="project name"
          class="input-title"
          ref="titleEnRef"
        />
      </div>
      <div class="horizontal-container">
        <img src="@/assets/es.png" alt="" class="flag" />
        <input
          type="text"
          v-model="this.titleEs"
          placeholder="project name"
          class="input-title"
          ref="titleEsRef"
        />
      </div>
    </div>

    <div class="horizontal-container">
      <h1 style="margin-top: 30px; font-weight: bold; color: #9dc12a; font-size: 25px;">
        Visibilità
      </h1>
      <input style="margin-top: 30px;" type="checkbox" placeholder="Visible" v-model="this.visibility">
    </div>

    <h1 style="margin: 20px; text-align: center; font-weight: bold; color: #9dc12a; font-size: 40px">
      Contenuto
    </h1>

    <div class="content-container">
      <!-- Italian Editor -->
      <div class="editor-section">
        <img src="@/assets/it.png" alt="" class="flag" />
        <TextEditorWidget
          v-if="project.id"
          :initialContent="this.contentIt || '<p>No content</p>'"
          :id="project.id"
          ref="contentItRef"
        />
      </div>

      <!-- English Editor -->
      <div class="editor-section">
        <img src="@/assets/uk.png" alt="" class="flag" />
        <TextEditorWidget
          v-if="project.id"
          :id="project.id"
          :initialContent="this.contentEn || '<p>No content</p>'"
          ref="contentEnRef"
        />
      </div>

      <!-- Spanish Editor -->
      <div class="editor-section">
        <img src="@/assets/es.png" alt="" class="flag" />
        <TextEditorWidget
          v-if="project.id"
          :id="project.id"
          :initialContent="this.contentEs || '<p>No content</p>'"
          ref="contentEsRef"
        />
      </div>
    </div>


    <h1 style="margin: 40px; text-align: center; font-weight: bold; color: #9dc12a; font-size: 40px">
      Descrizione Breve
    </h1>

    <div class="content-container">
      <!-- Italian Editor -->
      <div class="editor-section">
        <img src="@/assets/it.png" alt="" class="flag" />
        <TextEditorWidget
          v-if="project.id"
          :initialContent="this.short_desc_it || '<p>No content</p>'"
          :id="project.id"
          ref="short_desc_itRef"
        />
      </div>

      <!-- English Editor -->
      <div class="editor-section">
        <img src="@/assets/uk.png" alt="" class="flag" />
        <TextEditorWidget
          v-if="project.id"
          :initialContent="this.short_desc_en || '<p>No content</p>'"
          :id="project.id"
          ref="short_desc_enRef"
        />
      </div>

      <!-- Spanish Editor -->
      <div class="editor-section">
        <img src="@/assets/es.png" alt="" class="flag" />
        <TextEditorWidget
          v-if="project.id"
          :initialContent="this.short_desc_es || '<p>No content</p>'"
          :id="project.id"
          ref="short_desc_esRef"
        />
      </div>
    </div>


    <h1 style="margin-top: 40px; text-align: center; font-weight: bold; color: #9dc12a; font-size: 40px;">
      Tecnologie Utilizzate
    </h1>
    <div class="checkbox-container">
      <label class="tech-checkboxes" v-for="tech in ['Angular', '.NET', 'TypeScript',
      'Node', 'Xamarin',
      'JavaScript', 'Android', 'NativeScript', 'iOS',
      'jQuery', 'HTML', 'CSS', 'MySQL',
      'Microsoft SQL', 'SQLite', 'Java']" :key="tech">
        <input
          type="checkbox"
          :value="tech"
          v-model="selectedTechnologies"
        />
        {{ tech }}
      </label>
    </div>

    <h1 style="margin-top: 40px; text-align: center; font-weight: bold; color: #9dc12a; font-size: 40px;">
      Upload Immagine
    </h1>
    <div class="upload-container">
      <input type="file" @change="handleImageUpload" accept="image/*" />
      <img v-if="previewImage" :src="previewImage" alt="Preview" class="image-preview" />
    </div>

    <div class="button-container">
      <button class="submit-btn" type="submit" @click="updateProjectContent">Salva</button>
    </div>
  </div>
  <NavBarAdmin />
</template>
<script>
import { fetchProjects, overrideProject } from '@/api/api';
import NavBarAdmin from '@/components/AdminViewComponents/NavBarAdmin.vue';
import TextEditorWidget from '@/components/AdminViewComponents/TextEditorWidget.vue';
import { ref } from 'vue';

export default {
  components: {
    TextEditorWidget,
    NavBarAdmin
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      prjList: [],
      project: {},
      message: '',
      titleIt: '',
      titleEn: '',
      titleEs: '',
      contentIt: '',
      contentEn: '',
      contentEs: '',
      short_desc_it: '',
      short_desc_en: '',
      short_desc_es: '',
      visibility: false,
      titleItRef: ref(null),
      titleEnRef: ref(null),
      titleEsRef: ref(null),
      contentItRef: ref(null),
      contentEnRef: ref(null),
      contentEsRef: ref(null),
      short_desc_itRef: ref(null),
      short_desc_enRef: ref(null),
      short_desc_esRef: ref(null),
      visibilityRef: ref(false),
      selectedTechnologies: [],
      imageFile: null, // For storing the uploaded image file
      previewImage: null, // For previewing the uploaded image
    };
  },
  methods: {
    async fetchProjects() {
      try {
        const projects = await fetchProjects();
        this.prjList = projects || [];
        this.project = this.prjList.find((prj) => prj.id === Number.parseInt(this.id)) || {};
        if (this.project.tech_list) {
          this.selectedTechnologies = this.project.tech_list;
        }
        this.titleIt = this.project.titleIt || '';
        this.titleEn = this.project.titleEn || '';
        this.titleEs = this.project.title_es || '';
        this.contentIt = this.project.contentIt || '';
        this.contentEn = this.project.contentEn || '';
        this.contentEs = this.project.description_es || '';
        this.short_desc_it = this.project.short_descriptionIt || '';
        this.short_desc_en = this.project.short_descriptionEn || '';
        this.short_desc_es = this.project.short_description_es || '';
        this.visibility = this.project.visible || false;
        this.previewImage = this.project.image || null; // Load existing image
      } catch (error) {
        console.error('Error fetching data:', error);
        this.message = 'Error loading data';
      }
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageFile = file;
        this.previewImage = URL.createObjectURL(file); // Preview the image
      }
    },
    async updateProjectContent() {
      const projectId = this.id;

      // Retrieve content from the editors using refs
      const contentIt = this.$refs.contentItRef.getContent();
      const contentEn = this.$refs.contentEnRef.getContent();
      const contentEs = this.$refs.contentEsRef.getContent();
      const shortDescIt = this.$refs.short_desc_itRef.getContent();
      const shortDescEn = this.$refs.short_desc_enRef.getContent();
      const shortDescEs = this.$refs.short_desc_esRef.getContent();

      const formData = new FormData();
      formData.append('titleIt', this.titleIt);
      formData.append('contentIt', contentIt);
      formData.append('short_descriptionIt', shortDescIt);
      formData.append('titleEn', this.titleEn);
      formData.append('contentEn', contentEn);
      formData.append('short_descriptionEn', shortDescEn);
      formData.append('title_es', this.titleEs);
      formData.append('description_es', contentEs);
      formData.append('short_description_es', shortDescEs);
      formData.append('tech_list', this.selectedTechnologies);
      formData.append('visible', this.visibility);
      if (this.imageFile) {
        formData.append('image', this.imageFile); // Add the image file
      }

      try {
        const response = await overrideProject(projectId, formData);
        console.log('Project updated successfully:', response);
      } catch (error) {
        console.error('Error updating project:', error);
      }
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>
<style scoped>
.input-title {
  width: 100%;
  margin-left: 30px;
  margin-right: 30px;
  border: 4px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  background-color: #333;
  color: white;
  text-align: center;
}
.input-title-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 100px;
}
.horizontal-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.flag {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 10px;
}
.title-content-horizontal-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.editor-section {
  margin-bottom: 20px;
}
.submit-btn{
  background-color: white;
  color: #9dc12a;
  width: 200px;
  border-radius: 10px;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  cursor: pointer;
  border: 2px solid #9dc12a;
}

.submit-btn:hover {
  background-color: #9dc12a;
  color: white;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.tech-checkboxes {
  display: flex;
  gap: 20px;
  margin: 20px;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: bold;
  font-size: 25px;
}

.tech-checkboxes label {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #444;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

}

.tech-checkboxes label:hover {
  background-color: #9dc12a;
  color: white;
  transform: scale(1.05);
}

.tech-checkboxes input {
  accent-color: #9dc12a;
  transform: scale(1.2);
}

.checkbox-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.image-preview {
  margin-top: 10px;
  max-width: 300px;
  max-height: 300px;
  border-radius: 10px;
  border: 2px solid #9dc12a;
}
</style>
