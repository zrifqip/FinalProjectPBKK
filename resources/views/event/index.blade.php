<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Events</title>
        @vite('resources/css/app.css')
    </head>
    <body>
        <main class="min-h-screen py-16">
            <div class="mx-auto max-w-3xl mb-8">
                <h1 class="text-4xl">Events</h1>
            </div>
            <ul class="flex flex-col gap-4">
                @foreach ($events as $event)
                <li>
                    <div
                        class="flex max-w-3xl mx-auto shadow-md p-4 rounded-lg border border-gray-100"
                    >
                        <div class="flex-1 flex flex-col">
                            <div class="mb-8">
                                <div class="mb-2">
                                    <p class="font-bold text-2xl">
                                        {{ $event["name"] }}
                                    </p>
                                </div>
                                <p class="text-gray-700 text-base">
                                    {{ $event["description"] }}
                                </p>
                            </div>
                            <div class="flex items-center">
                                <div class="text-md">
                                    <p>
                                        by
                                        <span class="text-gray-900 font-bold">{{
                                            $event["organizer"]
                                            
                                        }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-center items-center max-w-[200px]"
                        >
                            <div
                                class="flex flex-col items-end text-end text-lg"
                            >
                                <div>
                                    at
                                    <span class="font-semibold">
                                        {{ $event["time"] }}
                                    </span>
                                </div>
                                <div>
                                    {{ $event["date"] }}
                                </div>

                                <div>
                                    in
                                    <span class="font-semibold break-words">{{
                                        $event["place"]
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                @endforeach
            </ul>
        </main>
    </body>
</html>
