class ReCaptcha {
    constructor(canvasId, inputId, buttonId, siteKey) {
        this.canvas = document.getElementById(canvasId);
        this.input = document.getElementById(inputId);
        this.button = document.getElementById(buttonId);
        this.ctx = this.canvas.getContext("2d");

        this.siteKey = siteKey;
        this.code = "";

        this.generate();

        this.button.addEventListener("click", () => this.verify());
    }

    generate() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        this.code = "";

        for (let i = 0; i < 6; i++) {
            this.code += chars[Math.floor(Math.random() * chars.length)];
        }

        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = "#f2f2f2";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "#222";

        for (let i = 0; i < this.code.length; i++) {
            const x = 20 + i * 25;
            const y = 40 + Math.random() * 10;

            this.ctx.save();
            this.ctx.translate(x, y);
            this.ctx.rotate((Math.random() - 0.5) * 0.4);
            this.ctx.fillText(this.code[i], 0, 0);
            this.ctx.restore();
        }
    }

    verify() {
        console.log("SITE KEY:", this.siteKey);

        if (this.input.value.toUpperCase() === this.code) {
            alert("CAPTCHA PASSED ✔\nSite Key: " + this.siteKey);
        } else {
            alert("FAILED ❌");
            this.generate();
        }
    }
}
