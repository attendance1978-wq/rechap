class SimpleCaptcha {
    constructor(canvasId, inputId, buttonId) {
        this.canvas = document.getElementById(canvasId);
        this.input = document.getElementById(inputId);
        this.button = document.getElementById(buttonId);
        this.ctx = this.canvas.getContext("2d");

        this.code = "";

        this.generateCaptcha();

        this.button.addEventListener("click", () => {
            this.validateCaptcha();
        });
    }

    generateCaptcha() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        this.code = "";

        for (let i = 0; i < 6; i++) {
            this.code += chars[Math.floor(Math.random() * chars.length)];
        }

        this.drawCaptcha();
    }

    drawCaptcha() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // background noise
        this.ctx.fillStyle = "#f2f2f2";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // text
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "#333";

        for (let i = 0; i < this.code.length; i++) {
            const x = 20 + i * 25;
            const y = 40 + Math.random() * 10;

            this.ctx.save();
            this.ctx.translate(x, y);
            this.ctx.rotate((Math.random() - 0.5) * 0.4);
            this.ctx.fillText(this.code[i], 0, 0);
            this.ctx.restore();
        }

        // noise lines
        for (let i = 0; i < 5; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(Math.random() * 200, Math.random() * 60);
            this.ctx.lineTo(Math.random() * 200, Math.random() * 60);
            this.ctx.strokeStyle = "#999";
            this.ctx.stroke();
        }
    }

    validateCaptcha() {
        if (this.input.value.toUpperCase() === this.code) {
            alert("CAPTCHA Passed!");
        } else {
            alert("Wrong CAPTCHA!");
            this.generateCaptcha();
        }
    }
}
