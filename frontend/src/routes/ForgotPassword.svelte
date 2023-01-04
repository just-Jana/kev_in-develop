<script>
    import Page from "../lib/components/common/Page.svelte";

    import Card from "@smui/card"
    import Button from "@smui/button"
    import { Label } from "@smui/common"
    import Textfield from "@smui/textfield"
    import HelperText from "@smui/textfield"
    import { link } from "svelte-spa-router";

    let valueA = '';
    let valueB = '';

    function sendMail(){
        valueB = "user input";
    }
    //function for sending an E-Mail to inserted adress
    //not implemented yet


</script>

<Page title="Forgot My Password">
    <div class="card-container">
        <Card class="forgotPW-card" variant="outlined" padded>
            <div class=forgotPW-card-content>
                <Label style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
                    Forgot Password?
                </Label>
                <p class="info-text">
                    No worries, we can reset your password. Just enter your e-mail, we'll take care of the rest.
                </p>
                <div>
                    <div class="textfield">
                        <Textfield variant="filled" bind:value={valueA} label="Your E-Mail" required>
                          <HelperText slot="helper" 
                          style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
                            Please enter your e-mail
                          </HelperText>
                        </Textfield>
                    </div>

                    <div class="request-PWreset-Button">
                        <a use:link href="/#">
                            <Button on:clicked={sendMail} variant="unelevated" style="padding-left: 35px; padding-right: 35px">
                                <Label>Reset my password</Label>
                            </Button>
                        </a>
                    </div>
                </div>

            </div>
        </Card>
    </div>
</Page>


<style>
    .card-container {
        max-width: 70%;
        color: #005f50;
        font-size: 2rem;
        position: absolute;
        margin: 0;
        left: 50%;
        top: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .forgotPW-card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .textfield{
        margin-top: 10px;
        font-size: small;
    }

    .request-PWreset-Button{
        align-self: center;
        align-content: center;
    }

    .info-text{
        font-size: medium;
        color: white;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        max-width: 14rem;
        /* text-align: center; */
    }
</style>