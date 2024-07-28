import ApiClient from "../../adapters/http/apiClient";
import uploadDataset from "../../usecases/uploadDataset";

export const datasetService = {
    loadDataset: async (dataset) => {
        try {
            const formData = new FormData();
            formData.append('file', dataset);
            const response = await ApiClient.post('/upload', formData);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'File upload failed');
        }
    }
}