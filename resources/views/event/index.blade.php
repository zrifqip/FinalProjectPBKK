<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        @vite('resources/css/app.css')
    </head>
    <body>
        <main class="min-h-screen">
            <ul class="flex flex-col justify-center">
                @foreach ($events as $event)
                <li>
                    <div class="max-w-sm w-full lg:max-w-full lg:flex pt-px">

                        <div
                            class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                        >
                            <div class="mb-8">
                                <div
                                    class="text-gray-900 font-bold text-xl mb-2"
                                >
                                    {{$event->name}}
                                </div>
                                <p class="text-gray-700 text-base">
                                    {{$event->description}}
                                </p>
                            </div>
                            <div class="flex items-center">
                                <div class="text-sm">
                                    <p class="text-gray-900 leading-none">
                                        {{$event->organizer}}
                                    </p>
                                    <p class="text-gray-600">
                                        {{$event->startDate}}
                                    </p>
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
