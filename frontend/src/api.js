import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchCourses = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/courses`);
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

export const fetchTypeCourses = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/type_course`);
        return response.data;
    } catch (error) {
        console.error('Error fetching type_course:', error);
        throw error;
    }
};

export const fetchType1Courses = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/type1_course`);
        return response.data;
    } catch (error) {
        console.error('Error fetching type1_course:', error);
        throw error;
    }
};

export const fetchCourseById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/api/courses/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching course:', error);
        throw error;
    }
};

export const submitApplication = async (applicationData) => {
    try {
        const response = await axios.post(`${apiUrl}/api/submit-application`, applicationData);
        return response.data;
    } catch (error) {
        console.error('Error submitting application:', error);
        throw error;
    }
};
