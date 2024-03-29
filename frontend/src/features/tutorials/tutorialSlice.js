import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import tutorialService from './tutorialService'

const initialState = {
    tutorials: [],
    selectedTutorial: {},
    createdTutorials: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createTutorial = createAsyncThunk('tutorials/createTutorial', async (tutorialData, thunkAPI) => {
    try {
        
        const token = thunkAPI.getState().auth.user
        return await tutorialService.createTutorial(tutorialData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getTutorials = createAsyncThunk('tutorials/getTutorials', async(_, thunkAPI) => {
    try {
        return await tutorialService.getTutorials()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getTutorial = createAsyncThunk('tutorials/getTutorial', async(id, thunkAPI) => {
    try {
        return await tutorialService.getTutorial(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteTutorial = createAsyncThunk('tutorials/deleteTutorial', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user
        return await tutorialService.deleteTutorial(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const userTutorials = createAsyncThunk('tutorials/userstutorials', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user
        return await tutorialService.userTutorials(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const addChapter = createAsyncThunk('tutorials/addChapter', async(formData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user
        return await tutorialService.addChapter(formData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteChapter = createAsyncThunk('tutorials/deleteChapter', async(idData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user
        const tutorial = thunkAPI.getState().tutorials.selectedTutorial._id
        
        return await tutorialService.deleteChapter(idData, tutorial, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const tutorialSlice = createSlice({
    name: 'tutorial',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTutorial.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(createTutorial.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.tutorials.push(action.payload)
                state.message = ''
            })
            .addCase(createTutorial.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(getTutorials.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(getTutorials.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.tutorials = action.payload
                state.message = ''
            })
            .addCase(getTutorials.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(getTutorial.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(getTutorial.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.selectedTutorial = action.payload
                state.message = ''
            })
            .addCase(getTutorial.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(deleteTutorial.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(deleteTutorial.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.selectedTutorial = action.payload
                state.message = ''
            })
            .addCase(deleteTutorial.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(userTutorials.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(userTutorials.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.createdTutorials = action.payload
                state.message = ''
            })
            .addCase(userTutorials.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(addChapter.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(addChapter.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.selectedTutorial = action.payload
                state.message = ''
            })
            .addCase(addChapter.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(deleteChapter.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(deleteChapter.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.selectedTutorial = action.payload
                state.message = ''
            })
            .addCase(deleteChapter.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
    }
})

export const { reset } = tutorialSlice.actions
export default tutorialSlice.reducer