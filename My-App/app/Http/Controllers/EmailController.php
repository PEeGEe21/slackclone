<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\InvitedUsers;
use App\Mail\MyEmail;

class EmailController extends Controller
{
    public function sendEmailToUser() {

        // $to_email = "umesh.rana0269@gmail.com";
        $to_email = new InvitedUsers();

        Mail::to($to_email)->send(new MyEmail);

        return "<p> Your E-mail has been sent successfully. </p>";

    }
}
