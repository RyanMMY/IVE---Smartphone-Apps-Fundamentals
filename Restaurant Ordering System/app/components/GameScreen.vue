<template>
    <Page class="page">
        <ActionBar title="Guess Numer" class="action-bar" />
        <StackLayout class="home-panel">
            <Label text="Let's guess a number from 1 - 100" />
            <Label :text="showselect" class="text-center" />
            <Slider v-model="toguess" @valueChange="onGuessNumberChanged"
                :minValue="minNumber" :maxValue="maxNumber" :isEnabled="start" />
            <Button @tap="onGuessButtonTap" :text="btnValue" />
            <Label :text="message" />
        </StackLayout>
</template>

<script>
    export default {
        methods: {
            onGuessButtonTap() {
                if (this.start) {
                    if (this.showselect == this.answer) {
                        this.message = "You win!!";
                        this.btnValue = "Start";
                        this.start = false;
                    } else if (this.showselect < this.answer) {
                        this.minNumber = this.showselect;
                        this.message = "Too small, hints: " + this.minNumber + " - " + this.maxNumber;
                    } else if (this.showselect > this.answer) {
                        this.maxNumber = this.showselect;
                        this.message = "Too large, hints: " + this.minNumber + " - " + this.maxNumber; 
                    } 
                }else{ 
                    this.start = true; 
                    this.answer = Math.ceil(Math.random() *100);
                    this.minNumber = 1;
                    this.maxNumber = 100;
                    this.toguess = 50;
                    this.showselect = this.toguess;
                    this.message = "";
                    this.btnValue = "Guess!";
                }
            },
            onGuessNumberChanged(){
                this.showselect = Math.ceil(this.toguess);
            }
        },

        data() {
            return {
                start: false,
                message:"",
                toguess: 0,
                showselect: "",
                minNumber: 1,
                maxNumber: 100,
                btnValue: "Start",
                answer: 0
            };
        }
    };
</script>

<style>
</style>