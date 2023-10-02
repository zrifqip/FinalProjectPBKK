<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <ul>
            @foreach ($events as $event)
            <li>
                <div>
                    {{ $event->id }}
                    {{ $event->name }}
                    {{ $event->description }}
                    {{ $event->startDate }}
                </div>
            </li>
            @endforeach
        </ul>
    </body>
</html>
