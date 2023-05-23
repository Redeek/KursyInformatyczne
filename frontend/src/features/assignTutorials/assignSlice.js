import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import assignService from './assignService'

const initialState = {
    assignTutorials: [],
    assignTutorial: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getAssignTutorials = createAsyncThunk('tutorials/getAssignTutorials', async (_ , thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user
        return await assignService.getTutorials(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const assignTutorialToAccount = createAsyncThunk('tutorials/AssignTutorial', async (tutorialId , thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user
        return await assignService.addAssignTutorial(tutorialId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAssignTutorial = createAsyncThunk('tutorials/getAssignTutorial', async ( id , thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user
        return await assignService.getTutorial(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const setEndChapter = createAsyncThunk('tutorials/setChapter', async ( tutorials , thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user
        console.log(token)
        return await assignService.setEndChapter(tutorials, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const unsetEndChapter = createAsyncThunk('tutorials/unsetChapter', async ( tutorials , thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user
        return await assignService.unsetEndChapter(tutorials, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const assignSlice = createSlice({
    name: 'assignTutorial',
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
            .addCase(getAssignTutorials.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(getAssignTutorials.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.assignTutorials = action.payload
                state.message = ''
            })
            .addCase(getAssignTutorials.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(assignTutorialToAccount.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(assignTutorialToAccount.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.assignTutorials.assignTutorials.push(action.payload)
                state.message = ''
            })
            .addCase(assignTutorialToAccount.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(getAssignTutorial.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(getAssignTutorial.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.assignTutorial = action.payload
                state.message = ''
            })
            .addCase(getAssignTutorial.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(setEndChapter.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(setEndChapter.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.message = ''
            })
            .addCase(setEndChapter.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(unsetEndChapter.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.message = ''
            })
            .addCase(unsetEndChapter.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.message = ''
            })
            .addCase(unsetEndChapter.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            
    }
})

export const { reset } = assignSlice.actions
export default assignSlice.reducer