<script>
    import Page from "../lib/components/common/Page.svelte";
    import Card from "@smui/card"
    import Button from "@smui/button"
    import { Label } from "@smui/common"
    import Textfield from "@smui/textfield"
    import HelperText from "@smui/textfield"
    import Link from "@smui/button"
  import { link } from "svelte-spa-router";

    let valueA = '';
    let valueB = '';

    function setNewPassword(){
        valueB = "user input";
    }
    //resetting PW of user with this token/ mailadress
    //not implemented yet
    
</script>

<Page title="Reset My Password">
    <div class="card-container">
        <Card class="forgotPW-card" variant="outlined" padded>
            <div class=forgotPW-card-content>
                <Label style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
                    Reset Password
                </Label>
                <p class="info-text">
                    Please insert and confirm your new password.
                </p>
                <div>
                    <div class="textfield">
                        <Textfield variant="filled" bind:value={valueA} label="Your New Password" required>
                          <HelperText slot="helper" 
                          style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
                            please enter your new password
                          </HelperText>
                        </Textfield>
                    </div>

                    <div class="textfield">
                        <Textfield variant="filled" bind:value={valueB} label="Confirm Password" required>
                          <HelperText slot="helper" 
                          style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
                            please confirm your new password
                          </HelperText>
                        </Textfield>
                    </div>

                    <div class="request-PWreset-Button">
                        <a use:link href="/login">
                            <Button on:clicked={setNewPassword} variant="unelevated" style="padding-left: 35px; padding-right: 35px">
                                <Label>Set new password</Label>
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
        align-self: center;
        max-width: 14rem;
        /* text-align: center; */
    }
</style>