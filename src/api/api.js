import axios from 'axios'
import { base_data_prj } from './variables'

export const fetchProjects = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/projects')
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}


export const fetchTexts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/get_textes')
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}

export const updateAboutTexts = async (lang, text) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/update_about_text/${lang}`,
      { text: text }
    );
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}

export const updatePartnersTexts = async (lang, text) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/update_partners_text/${lang}`,
      { text: text }
    );
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}

export const updateTechTexts = async (lang, text) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/update_tech_text/${lang}`,
      { text: text }
    );
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}


export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/api/delete_project/${id}`)
    if (!response || !response.data) {
      throw new Error('No data received')
    }
    return response.data
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`
    } else if (error.request) {
      return 'No response from server'
    } else {
      return `Error: ${error.message}`
    }
  }
}


export const overrideProject = async (id, data) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/override_project_content/${id}`,
      data
    );
    if (!response || !response.data) {
      throw new Error('No data received');
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`;
    } else if (error.request) {
      return 'No response from server';
    } else {
      return `Error: ${error.message}`;
    }
  }
};

export const addProject = async () => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/create_project`, base_data_prj
    );
    if (!response || !response.data) {
      throw new Error('No data received');
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`;
    } else if (error.request) {
      return 'No response from server';
    } else {
      return `Error: ${error.message}`;
    }
  }
};


export const sendEmail = async (data) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/send_contact_email`, data
    );
    if (!response || !response.data) {
      throw new Error('No data received');
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Server error: ${error.response.status}`;
    } else if (error.request) {
      return 'No response from server';
    } else {
      return `Error: ${error.message}`;
    }
  }
};
