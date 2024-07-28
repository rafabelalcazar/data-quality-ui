import ApiClient from "../../adapters/http/apiClient";

export const datasetService = {
    loadDataset: async (dataset) => {
        try {
            const formData = new FormData();
            formData.append('file', dataset);
            const response = await ApiClient.post('/upload-dataset/', formData);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'File upload failed');
        }
    }
}